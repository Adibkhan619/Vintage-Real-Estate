import { useLoaderData } from "react-router-dom";
import SiteCard from "./SiteCard";


const Home = () => {
  const realEstates = useLoaderData();
  console.log(realEstates);

  return (
    <div>
      {/* {realEstates.map(site => <li><img className="w-24" src={site.img} alt="" /></li>)} */}
      <div>
        {realEstates.map(item => <SiteCard site={item} key={item.id}></SiteCard>)}
      </div>
    </div>
  );
};

export default Home;
