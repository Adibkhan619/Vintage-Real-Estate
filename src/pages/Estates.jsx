
import { useLoaderData } from 'react-router-dom';
import SiteCard from './SiteCard';

const Estates = () => {

    const realEstates = useLoaderData();
  console.log(realEstates);
    return (
        <div>
            {realEstates.map(item => <SiteCard site={item} key={item.id}></SiteCard>)}
        </div>
    );
};

export default Estates;