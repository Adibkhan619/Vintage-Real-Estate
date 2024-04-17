import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex justify-center bg-orange-200 h-screen shadow-2xl">
      <div className="text-center flex h-[350px] flex-col rounded-xl gap-5 px-10 py-10 bg-orange-300 my-[150px]">
        <h1 className="text-2xl p-2 rounded-xl text-gray-700 font-bold  bg-amber-300">
          Page Not Found!
        </h1>
        <h1 className="text-5xl font-bold text-red-600">
          <em>Error 404!</em>{" "}
        </h1>

        <p className="text-gray-700 text-3xl px-5 rounded-lg mx-10 py-3 font-bold">
          Please Go Back
        </p>

        <Link to="/">
          <button className="btn border-none bg-amber-300 px-10 play-fair text-gray-700 font-bold text-2xl">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
