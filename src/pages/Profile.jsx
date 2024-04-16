import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import 'animate.css';

const Profile = () => {
  const { user } = useContext(AuthContext);
  // const [name, setName] = useState();

  const handleUpdate = (e) => {
    // e.preventDefault()
    const form = new FormData(e.currentTarget);
    const name = form.get('name');
    const photo = form.get('photo');

  updateProfile(user, {
    displayName: name,
    photoURL: photo,
    })
    .then()
    .catch()  

  }

  return (
    <div>
      <div>
       
        <div className="h-fit w-3/4 mx-auto rounded-3xl bg-base-200 ">
          
          <div className="p-16 border rounded-3xl flex lg:flex-row mx-auto items-center justify-center gap-20  ">
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold animate__animated animate__bounce text-center"><span className="">Hello!</span> {user.displayName}</h1>
              <img className="w-48 h-48 rounded-full mx-auto border-red-300 border-4"  src={user.photoURL} alt=""/>              
              <h1 className="text-xl text-center">Email: {user.email}</h1>
              
{/*  */}
            </div>
            <div className="card w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleUpdate} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder={user.displayName}
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="text"
                    placeholder={user.photoURL}
                    name="photo"
                    className="input input-bordered"
                    required
                  />
                 
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">Update Profile</button>
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
