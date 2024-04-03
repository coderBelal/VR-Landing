import React, { useEffect } from "react";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Experience from "./components/Experience";
import Video from "./components/Video";
import Headset from "./components/Headsets";
import Testomonial from "./components/Testimonial";
import Explore from "./components/Explore";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 2500,

      delay: 400,
    });
  });
  return (
    <div>
      <Header />
      <Banner />
      <Experience />
      <Video />
      <Headset />
      <Testomonial />
      <Explore />
    </div>
  );
};

export default App;
