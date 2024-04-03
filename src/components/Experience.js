import React from "react";
import Image1 from "../assets/img/exp-img1.png";
import Image2 from "../assets/img/exp-img2.png";
const Experience = () => {
  return (
    <section className=" mb-12 lg:mb-24">
      <div className=" container mx-auto">
        <div className=" flex flex-col min-h-[480px] lg:space-x-20 lg:flex-row">
          <div className=" flex-1 flex space-x-6 items-center lg:space-x-12">
            <div className=" self-start">
              <img src={Image1}></img>
            </div>
            <div className=" self-end">
              <img src={Image2}></img>
            </div>
          </div>
          <div className=" flex-1 flex flex-col items-start justify-center mt-6 lg:mt-0">
            <h2 className=" text-3xl font-bold mb-6">
              New Experience In Playing Games
            </h2>
            <p className=" font-secondary mb-6">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              sapiente aliquid non quisquam cumque consectetur.
            </p>
            <button className="btn"> Get It Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
