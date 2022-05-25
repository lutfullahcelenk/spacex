import React, { useContext } from "react";
import { LaunchContext } from "../../context";
//components
import Image from "../Shared/Image";
//images
import web from "../../assets/home/web.svg";
import flickr from "../../assets/home/flickr.svg";
import twitter from "../../assets/home/twitter.svg";
import elon from "../../assets/home/elonmusk.webp";

const Byography = () => {
  const { rockets } = useContext(LaunchContext);

  return (
    <div className="container mx-auto mb-20">
      <h1 className="w-full text-5xl font-bold leading-tight text-center my-14 ">
        {rockets?.name}
      </h1>
      <div className="flex flex-col items-center my-10 mx-20 xl:flex-row ">
        <div className="flex flex-col m-5 w-full text-center xl:w-1/2 lg:text-left">
          <h1 className="text-4xl font-bold mb-5">{rockets?.ceo}</h1>
          <p className="text-base mt-8">{rockets?.summary}</p>
          <p className="text-base mt-10">For detailed informations:</p>
          <div className="flex flex-col justify-left items-center mt-6 xl:flex-row">
            <a
              className="m-2 flex items-center justify-center bg-blue-500 text-white font-bold py-2 px-3 rounded-2xl"
              href={rockets?.links?.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-6 mr-2" src={web} alt="web" /> Website
            </a>
            <a
              className="m-2 flex items-center justify-center bg-blue-500 text-white font-bold py-2 px-3 rounded-2xl"
              href={rockets?.links?.flickr}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-6 mr-2" src={flickr} alt="web" /> Flickr
            </a>
            <a
              className="m-2 flex items-center justify-center bg-blue-500 text-white font-bold py-2 px-3 rounded-2xl"
              href={rockets?.links?.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-6 mr-2" src={twitter} alt="web" /> Twitter
            </a>
            <a
              className="m-2 flex items-center justify-center bg-blue-500 text-white font-bold py-2 px-3 rounded-2xl"
              href={rockets?.links?.elon_twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="w-6 mr-2" src={twitter} alt="web" /> Elon Musk
            </a>
          </div>
        </div>
        <div className="flex flex-1 justify-center">
          <Image
            className="w-auto rounded-3xl mt-10 hidden sm:block"
            src={elon}
            width="416px"
            height="416px"
          />
        </div>
      </div>
    </div>
  );
};

export default Byography;
