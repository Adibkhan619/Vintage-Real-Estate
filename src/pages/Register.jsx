import { useContext, useState } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import 'animate.css'
import { IoMdEye } from "react-icons/io";

const Register = () => {

  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState();
  const [showPassword, setShowPassword] = useState(false);

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
      <div className="lg:hero md:hero lg:max-w-7xl rounded-3xl mx-auto lg:h-[630px]  lg:bg-gray-700">
        <img
          className="lg:hero-overlay lg:h-[630px] px-3 lg:px-0 rounded-3xl lg:opacity-50"
          src="https://i.postimg.cc/k5cY4ZqG/banner5.jpg"
          alt=""
        />
        <div className="lg:hero-content px-5 lg:px-16 lg:gap-10 flex-col lg:flex-row-reverse">
          <div className="text-center space-y-3 lg:text-left">
            <h1 className="text-5xl md:text-yellow-200 text-gray-700 lg:text-yellow-200 py-5 font-bold animate__bounceIn animate__animated">
            Unlock Exclusive Benefits! Register Today.
            </h1>
            <p className="p-6 rounded-lg font-semibold bg-orange-100 bg-opacity-70 text-gray-700">
            Join our community of homebuyers and sellers to access personalized property recommendations, exclusive deals, and expert advice. Start your real estate journey now by signing up below.
            </p>
          </div>
          <div className="card mt-5 shrink-0 w-full max-w-sm shadow-2xl bg-opacity-85 bg-amber-200 animate__fadeInDown animate__animated">
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
                <div className="inline-flex">
                   <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input w-full  input-bordered"
                  required
                />
                <span className="relative text-lg right-7 top-4 text-gray-400" onClick={() => setShowPassword (!showPassword)}><IoMdEye /></span>
                </div>
               
                <small className="text-red-600">{error}</small>
              </div>
              <div className="form-control mt-6">
                <button
                  type="submit"
                  className="btn border-none font-bold text-gray-800 text-lg bg-orange-500 w-full "
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
