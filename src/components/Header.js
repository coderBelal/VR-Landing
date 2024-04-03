import React from "react";
import Logo from "../assets/img/logo.svg";

import Nav from "./Nav";
const Header = () => {
  return (
    <header className=" py-6">
      <div className=" container mx-auto">
        <div className=" flex items-center justify-between">
          <a href="">
            <img className="h-[30px]" src={Logo}></img>
          </a>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
