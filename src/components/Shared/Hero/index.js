import React from "react";

const Hero = ({ title, subtitle, author }) => {
  return (
    <div className="w-full bg-gradient-to-r from-sky-500 to-indigo-500 text-white">
      <div className="container flex flex-wrap justify-center flex-col px-5 mx-auto md:flex-row">
        <div className="flex flex-col w-full mt-5 justify-center text-center md:text-center md:w-2/5">
          <h1 className="my-4 text-6xl font-bold leading-tight">{title}</h1>
          <p className="leading-normal text-xl mb-8">{subtitle}</p>
          <p className="leading-normal text-xl mb-8">{author}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
