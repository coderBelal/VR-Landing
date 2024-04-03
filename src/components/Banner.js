import React from "react";
import Users from "../components/Users";
import Img from "../assets/img/banner-img.png";
const Banner = () => {
  return (
    <section className=" min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left">
      <div className="container mx-auto">
        <div className=" flex flex-col lg:flex-row">
          {/* text */}
          <div>
            <h1 className=" text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug">
              Let's Explore <br /> Three-Dimensional Visually
            </h1>
            <p className=" font-secondary mb-12 max-12 max-w-[440px] mx-auto lg:mx-0">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              sapiente aliquid non quisquam cumque consectetur.
            </p>
            <div className=" flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start">
              <button className="btn">Get It Now</button>
              <a
                href=""
                className=" border-b-2 border-transparent hover:border-white transition ease-out"
              >
                Explore Devices
              </a>
            </div>
            <Users />
          </div>
          {/* Image */}
          <div>
            <img className=" mb-12" src={Img} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
