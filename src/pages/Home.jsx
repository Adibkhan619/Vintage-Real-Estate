import { useLoaderData } from "react-router-dom";
import SiteCard from "./SiteCard";


const Home = () => {
  const realEstates = useLoaderData();
  console.log(realEstates);

  return (
    <div className="mx-auto">
   

      





      <div>
        {realEstates.map(item => <SiteCard site={item} key={item.id}></SiteCard>)}
      </div>
    </div>
  );
};

export default Home;
