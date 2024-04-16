import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div>
        <div>
          <h1 className="text-3xl">{user.displayName}</h1>
          <p>socreteses</p>
        </div>
        {/* <div className="h-fit w-3/4 mx-auto rounded-3xl bg-base-200 ">
          <div className="p-16 border rounded-3xl flex lg:flex-row-reverse mx-auto items-center justify-center gap-20  ">
            <div className="">
              <img className="w-96 h-96 rounded-full"  src={user.photoURL} alt="" />
            </div>
            <div className="card w-full max-w-sm shadow-2xl bg-base-100">
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
        </div> */}
      </div>
    </div>
  );
};

export default Profile;
