import { useEffect } from "react";
import useTilte from "../../Hooks/Title";
import Banner from "./Banner";
import Contact from "./Contact";
import HomeService from "./HomeServices";
import Slider from "./Slider";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useTilte("Tour-Guide");
  return (
    <div className="bg-white">
      <div className="w-full">
        <Banner></Banner>
      </div>
      <div className="w-11/12 md:w-9/12 mx-auto ">
        <h1 className="text-3xl font-bold py-10 text-center ">Services</h1>
        <HomeService></HomeService>
      </div>
      <div className="w-11/12 md:w-9/12 mx-auto " id="contact">
        <h1 className="text-3xl font-bold py-10 text-center ">Gallery</h1>
        <Slider></Slider>
      </div>
      <div className="w-11/12 md:w-9/12 mx-auto " id="contact">
        <h1 className="text-3xl font-bold py-10 text-center ">Contact</h1>
        <Contact></Contact>
      </div>
    </div>
  );
};

export default Home;
