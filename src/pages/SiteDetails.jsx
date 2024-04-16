import { useLoaderData, useParams } from "react-router-dom";

const SiteDetails = () => {

    const {id} = useParams();
    const sites= useLoaderData();
    console.log(sites); 
    const site =  sites.find((item) => item.id == id);
    const { category, img, site_title, description } = site;

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{site_title}</h1>
            <p className="py-6">
            {description}
            </p>
            <p>{category}</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteDetails;
