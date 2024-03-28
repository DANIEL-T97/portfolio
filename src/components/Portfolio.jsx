import React from "react";
import dishi from "../assets/portfolio/dishi.png";
import keja from "../assets/portfolio/Keja.png";
import movie from "../assets/portfolio/movie.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: dishi,
      url: "https://dishi-tamu.vercel.app/",
    },

    {
      id: 2,
      src: keja,
      url: "https://github.com/DANIEL-T97/House-renting-application-phase-4-final-project",
    },

    {
      id: 3,
      src: movie,
      url: "https://github.com/DANIEL-T97/Phase-1-Movie-Explorer-Project",
    },
  ];

  const handleButtonClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, url }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <div onClick={() => handleButtonClick(url)} className="cursor-pointer">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={() => handleButtonClick(url)}>
                  View Website
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
