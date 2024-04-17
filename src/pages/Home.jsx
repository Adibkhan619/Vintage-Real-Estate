import { Helmet } from "react-helmet";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import AOS from 'aos';
import 'aos/dist/aos.css';
// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Pagination } from "swiper/modules";
import "animate.css";
import { useEffect } from "react";

const Home = () => {

  useEffect(() => {
    AOS.init();
  }, [])


  return (
    <div className="">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="hero  max-w-7xl rounded-3xl mx-auto lg:h-[600px] md:h-[300px]   bg-gray-900">
        <img
          className="hero-overlay lg:h-[600px] md:h-[300px] h-[250px]  rounded-3xl opacity-70"
          src="https://i.postimg.cc/257zN3Mf/hero.jpg"
          alt=""
        />

        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className=" lg:text-5xl my-2 text-yellow-200 font-bold animate__bounceIn animate__animated">
              Welcome Home to Your Real Estate Journey!
            </h1>
            <p className="font-medium text-lg text-yellow-200">
              Discover the perfect place to call home with our comprehensive
              real estate platform. Whether you are buying, selling, or simply
              exploring, we are here to guide you every step of the way. Start
              your journey today!
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>

      <div className="my-8 ">
        <h1 data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="lg:text-4xl my-5 md:text-2xl font-bold text-center lg:py-8 lg:my-8 text-gray-700 bg-yellow-100 lg:rounded-xl">
          Explore Your Dream Spaces
        </h1>
        <Swiper
          className=""
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={3}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img
              className=" mx-auto rounded-3xl"
              src="public/banner/banner1.jpg"
              alt=""
            />
          </SwiperSlide>
          {/* <SwiperSlide><img className=" mx-auto" src="public/banner/banner2.jpg" alt="" /></SwiperSlide> */}
          <SwiperSlide>
            <img
              className=" mx-auto rounded-3xl"
              src="public/banner/banner3.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" mx-auto rounded-3xl"
              src="public/banner/bannar4.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" mx-auto rounded-3xl"
              src="public/banner/banner5.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" mx-auto rounded-3xl"
              src="public/banner/banner6.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className=" mx-auto rounded-3xl"
              src="public/banner/banner7.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>

      {/* <div >
        <h1 data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className="text-7xl">hola</h1>
      </div> */}
    </div>
  );
};

export default Home;
