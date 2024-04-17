import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import {  useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from "react-helmet";
import 'animate.css'
import { IoMdEye } from "react-icons/io";

const Login = () => {
  const { logIn, googleLogin, githubLogin } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

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
      <Helmet>
        <title>Login</title>
      </Helmet>
        <div className="lg:hero lg:max-w-7xl rounded-3xl mx-auto lg:h-[600px] lg:bg-gray-900">
              <img className="lg:hero-overlay lg:h-[600px] rounded-3xl p-3 lg:opacity-70" src="https://i.postimg.cc/sx5N613D/banner-final.jpg" alt="" />
  <div className="lg:hero-content lg:px-16 lg:gap-10 flex-col-reverse lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl lg:text-yellow-200 text-gray-800 py-5 font-bold animate__bounceIn animate__animated">Login Now!</h1>
      <p className="p-6 mx-5 rounded-lg  font-semibold bg-orange-100 bg-opacity-70 text-gray-700">Unlock the gateway to unparalleled industrial opportunities by registering now on our website. Gain exclusive access to a diverse array of industrial complexes, from cutting-edge factories to state-of-the-art power plants.</p>
    </div>
          <div className="card shrink-0 lg:w-full m-5 max-w-sm shadow-2xl lg:bg-opacity-85  bg-yellow-200 animate__fadeInDown animate__animated">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-lg">Email</span>
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
                  <span className="label-text font-semibold text-lg">Password</span>
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
              </div>

              <div className="form-control mt-6">
                <button type="submit" className="btn font-bold text-gray-800 text-lg bg-orange-500 w-full ">
                  Login
                </button>
              </div>
           </form>
           

<div className="flex items-center px-4 py-1 space-x-1">
		<div className="flex-1  h-px sm:w-16 dark:bg-gray-300"></div>
		<p className="px-3 text-sm dark:text-gray-600">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
	</div>
	<div className="flex justify-center space-x-4">
		<button onClick={handleGoogleLogin} aria-label="Log in with Google" className="p-3 rounded-sm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
			</svg>
		</button>
		
		<button onClick={handleGitHubLogin} aria-label="Log in with GitHub" className="p-3 rounded-sm">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
				<path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
			</svg>
		</button>
	</div>
	<p className="mb-8 text-center">
              <small>Do not have an account?{" "}</small>
              <Link to="/register" className="hover:text-blue-600 underline">
                <small>Register</small>
              </Link>
            </p>
            
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
