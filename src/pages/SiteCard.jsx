import { Link } from "react-router-dom";

const SiteCard = ({ site }) => {
  const { id, category,img,site_title, description, segment_name, total_area } = site;
  console.log(id, category);
  
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={img}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{site_title}</h2>
          <p>{segment_name}</p>
          <p>{total_area}</p>
          <div className="card-actions ">
            <Link to={`/siteDetails/${id}`}>
            <button className="btn bg-orange-400 text-white font-semibold text-lg w-full  mx-auto">View Property</button>
            </Link>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteCard;
