
import { Helmet } from "react-helmet";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";


const Home = () => {


  return (
    
    <div className="">


<Helmet>
        <title>Home</title>
      </Helmet>
      <div className="hero max-w-7xl rounded-3xl mx-auto h-[600px]  bg-gray-900"> 
  
  <img className="hero-overlay h-[600px] rounded-3xl opacity-50" src="https://i.postimg.cc/sx5N613D/banner-final.jpg" alt="" />
  
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>


<div className="my-8">
  <Swiper 
      modules={[ Pagination]}
      spaceBetween={50}
      slidesPerView={3}
      // navigation
      pagination={{ clickable: true }}
      // scrollbar={{ draggable: true }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><img className=" mx-auto rounded-3xl" src="public/banner/banner1.jpg" alt="" /></SwiperSlide>
      {/* <SwiperSlide><img className=" mx-auto" src="public/banner/banner2.jpg" alt="" /></SwiperSlide> */}
      <SwiperSlide><img className=" mx-auto rounded-3xl" src="public/banner/banner3.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className=" mx-auto rounded-3xl" src="public/banner/bannar4.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className=" mx-auto rounded-3xl" src="public/banner/banner5.jpg" alt="" /></SwiperSlide>
    
      ...
    
  </Swiper>
</div>




    





    </div>
  );
};

export default Home;
