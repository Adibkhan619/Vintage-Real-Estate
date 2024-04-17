import { Link } from "react-router-dom";
import "animate.css";
import PropTypes from "prop-types";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const SiteCard = ({ site }) => {

  useEffect(() => {
    AOS.init();
  }, [])

  const { id,  img, site_title, segment_name, total_area } = site;

  return (
    
      <div className="animate__flipInY animate__animated rounded-3xl bg-amber-100 lg:w-96 mx-5  shadow-xl ">
        <figure>
          <img className="rounded-t-3xl" src={img} alt="" />
        </figure>
        <div className="card-body rounded-3xl">
          <h2 className="card-title font-bold text-gray-700 text-2xl">
            {site_title}
          </h2>
          <p className="text-gray-600 font-semibold">{segment_name}</p>
          <p className="text-gray-600 font-semibold">{total_area}</p>
          <div className="card-actions ">
            <Link to={`/siteDetails/${id}`}>
              <button className="btn bg-orange-400 rounded-3xl text-gray-700 font-bold text-base w-full  mx-auto">
                View Property
              </button>
            </Link>
          </div>
        </div>
      </div>
  );
};
SiteCard.propTypes = {
  site: PropTypes.any,
};

export default SiteCard;
