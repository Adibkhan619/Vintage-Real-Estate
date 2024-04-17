import { Link } from "react-router-dom";

const SiteCard = ({ site }) => {
  const { id, category,img,site_title, description, segment_name, total_area } = site;
  console.log(id, category);
  
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl" >
        <figure>
          <img
            src={img}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-gray-700 text-2xl">{site_title}</h2>
          <p className="text-gray-600 font-semibold">{segment_name}</p>
          <p className="text-gray-600 font-semibold">{total_area}</p>
          <div className="card-actions ">
            <Link to={`/siteDetails/${id}`}>
            <button className="btn bg-orange-400 rounded-3xl text-gray-700 font-bold text-base w-full  mx-auto">View Property</button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};



export default SiteCard;
