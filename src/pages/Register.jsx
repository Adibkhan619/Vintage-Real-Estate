import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import 'animate.css'

const Register = () => {
  // useEffect(() => {
  //   document.title = "Register";
  // }, []);

  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState();

  const handleRegister = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photo = form.get("photo");
    const password = form.get("password");

    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    if (!/(?=.*[a-z])(?=.*[A-Z])/.test(password)) {
      setError(
        "Password must have at least one uppercase and one lowercase letter."
      );
      return;
    }
    setError("");

    // Create User
    createUser(email, password)
      .then((result) => {
        toast("Registration Successful !");
        console.log(result, "success");

        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then()
          .catch();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <div className="hero max-w-7xl rounded-3xl mx-auto h-[600px]  bg-gray-700">
        <img
          className="hero-overlay h-[600px] rounded-3xl opacity-50"
          src="https://i.postimg.cc/sx5N613D/banner-final.jpg"
          alt=""
        />
        <div className="hero-content px-16 lg:gap-10 flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl text-orange-400 py-5 font-bold animate__bounceIn animate__animated">
              Register Now!
            </h1>
            <p className="p-6 rounded-lg bg-violet-950 bg-opacity-40 text-orange-400">
              Unlock the gateway to unparalleled industrial opportunities by
              registering now on our website. Gain exclusive access to a diverse
              array of industrial complexes, from cutting-edge factories to
              state-of-the-art power plants.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-opacity-60 bg-orange-300 animate__fadeInDown animate__animated">
            <form onSubmit={handleRegister} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered   "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Email
                  </span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered  "
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Photo url
                  </span>
                </label>
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo url"
                  className="input input-bordered  "
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered "
                  required
                />
                <small className="text-red-600">{error}</small>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn border-2 text-white text-lg bg-indigo-900 w-full"
                >
                  Register
                </button>
              </div>
              <p>
                <small>Already have an account? </small>
                <Link to="/login" className="hover:text-blue-500">
                  <small>
                    <strong>Login</strong>
                  </small>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
