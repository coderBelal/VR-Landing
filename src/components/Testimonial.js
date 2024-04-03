import React from "react";
import TestomonialSlider from "./TestimonialSlider";
const Testimonial = () => {
  return (
    <section className=" mb-64   mt-28 lg:mb-48">
      <div className=" con mx-auto">
        <div className=" bg-purple-400/10 max-h-[400px] p-12 rounded-lg">
          <div className=" text-center">
            <h2 className=" text-3xl font-bold mb-6">What our client say</h2>
            <p className=" max-w-2xl  mx-auto mb-12 lg:mb24">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
              sapiente aliquid non quisquam cumque consectetur.
            </p>
          </div>
          <div className=" ">
            <TestomonialSlider />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
