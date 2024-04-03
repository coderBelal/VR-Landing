import React from "react";
import Avatar1 from "../assets/img/avt1.png";
import Avatar2 from "../assets/img/avt2.png";
import Avatar3 from "../assets/img/avt3.png";
import Avatar4 from "../assets/img/avt4.png";

const Users = () => {
  return (
    <div className=" flex flex-col justify-center items-center space-x-5 lg:flex-row lg:space-y-0 lg:justify-start">
      <div className=" flex -space-x-2">
        <div className=" w-12 h-12 rounded-full">
          <img src={Avatar1}></img>
        </div>
        <div className=" w-12 h-12 rounded-full">
          <img src={Avatar2}></img>
        </div>
        <div className=" w-12 h-12 rounded-full">
          <img src={Avatar3}></img>
        </div>
        <div className=" w-12 h-12 rounded-full">
          <img src={Avatar4}></img>
        </div>
      </div>
      <p className="  text-xl ml-0">400+ Active User</p>
    </div>
  );
};

export default Users;
