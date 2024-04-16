import { useLoaderData, useParams } from "react-router-dom";

const SiteDetails = () => {

    const {id} = useParams();
    const sites= useLoaderData();
    console.log(sites); 
    const site =  sites.find((item) => item.id == id);
    const { category, segment_name, price, status, total_area, img, site_title, description, location, facilities  } = site;

  return (
    <div>
      <div className=" rounded-3xl my-8 bg-base-200">
        <div className="flex gap-8 md:flex-col lg:flex-row p-8">
          <img
            src={img}
            className="max-w-[700px] rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{site_title}</h1> 
            <h2 className="text-3xl font-semibold">{price}</h2> 

           
             <h1 className="font-bold bg-yellow-300 rounded-r-3xl py-2 px-4">{segment_name}</h1>  
           
                  
            <p className="py-4 text-gray-600">
            {description}
            </p>

            <div className="pb-4">
              <p className="text-2xl font-semibold">{total_area}</p>
              {/* <p className="text-lg">{category}</p> */}
              <p className="text-xl">{location}</p>
            </div>
           


            <div className="flex gap-4 mb-4">
              <p className="bg-red-500 px-4 py-2 text-white font-semibold rounded-lg ">{facilities[0]}</p>
              <p className="bg-green-500 px-4 py-2 text-white font-semibold rounded-lg ">{facilities[1]}</p>
              <p className="bg-orange-500 px-4 py-2 text-white font-semibold rounded-lg ">{facilities[2]}</p>
            </div>
            <p className="text-2xl font-bold text-green-600"><em>{status}</em></p>  
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteDetails;
