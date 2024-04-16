import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div>
        <img className="w-48" src={user.photoURL} alt="" />
        <h1>Its profile</h1>
      </div>

      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content justify-center gap-24 flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <img className="w-1/2" src={user.photoURL} alt="" />
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
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
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
