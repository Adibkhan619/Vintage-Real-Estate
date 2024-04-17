
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import 'animate.css';
import { Helmet } from "react-helmet";
import { useContext } from "react";
import 'animate.css'

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
      <Helmet>
        <title>Profile | {user.displayName}</title>
      </Helmet>
        <div className="h-fit lg:w-3/4 lg:mx-auto mx-5 rounded-3xl lg:bg-base-200 " style={{background: `url('https://i.postimg.cc/tTRWkR2D/pexels-eneida-nieves-803975.jpg')`}}>
          
          <div className="lg:p-16  rounded-3xl flex flex-col lg:flex-row mx-auto items-center justify-center lg:gap-20 gap-5 ">
            <div className="space-y-3">
              <h1 className="text-4xl font-semibold animate__animated animate__bounce text-center lg:text-yellow-200 text-gray-700"><span className="">Hello!</span> {user.displayName}</h1>
              <img className="w-48 h-48 rounded-full mx-auto border-red-400 border-4"  src={user.photoURL} alt=""/>              
              <h1 className="text-xl text-center lg:text-yellow-200">Email: {user.email}</h1>
            </div>


            <div className="card w-full max-w-sm shadow-2xl bg-amber-200 animate__flipInX animate__animated">
              <form onSubmit={handleUpdate} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-xl font-semibold">Name</span>
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
                    <span className="label-text text-xl font-semibold">Photo</span>
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
                  <button type="submit" className="btn border-none text-lg text-gray-700 bg-orange-400">Update Profile</button>
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
