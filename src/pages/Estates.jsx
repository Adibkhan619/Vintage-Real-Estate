
import { useLoaderData } from 'react-router-dom';
import SiteCard from './SiteCard';

const Estates = () => {

    const realEstates = useLoaderData();
  console.log(realEstates);
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-rows-1 gap-5 '>
            {realEstates.map(item => <SiteCard site={item} key={item.id}></SiteCard>)}
        </div>
    );
};

export default Estates;