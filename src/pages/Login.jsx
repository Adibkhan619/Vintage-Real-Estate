import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const { logIn, googleLogin, githubLogin } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();

    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    logIn(email, password)
      .then((result) => {
        toast("Login Successful !");
        console.log(result.user);})
      .catch((error) => {
        toast("Invalid Email or Password");
        console.log(error);});
  };
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user, 'working');
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGitHubLogin = () => {
    githubLogin()
    .then((result) => {
      console.log(result.user, 'github working');
    })
    .catch((error) => {
      console.log(error);
    });
  }

  return (
    <div>
      <div className="hero  h-[500px]  bg-base-200">
        <div className="hero-content lg:gap-10 flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login</h1>
            <p className="py-6">
              Gain exclusive access to a diverse array of industrial complexes,
              from cutting-edge factories to state-of-the-art power plants.
            </p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  autoComplete="current-password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
           </form>
            <div className="px-8 mb-8">
              <button className="btn btn-primary" onClick={handleGoogleLogin}>Google</button>
              <button className="btn btn-secondary" onClick={handleGitHubLogin}>GitHub</button>
            <div className="px-5">
            <p>
              <small>Do not have an account?{" "}</small>
              <Link to="/register" className="hover:text-blue-500">
                <small>Register</small>
              </Link>
            </p>
            </div>
            
            
            </div> 
            
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
