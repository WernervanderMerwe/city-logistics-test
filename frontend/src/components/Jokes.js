import * as React from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import chuckNorris0 from "../assets/chucknorris.jpeg";
import chuckNorris1 from "../assets/chucknorris2.jpg";
import chuckNorris2 from "../assets/chucknorris3.jpg";
import chuckNorris3 from "../assets/chucknorris4.jpeg";

/**
 *
 * @param {
 *  jokes: {
 *   id string
 *   icon_url string
 *   url string
 *   value string
 * }
 *}
 *
 * @returns
 */
function Jokes({ jokes }) {
  const imports = [chuckNorris0, chuckNorris1, chuckNorris2, chuckNorris3];

  const JokeCarousel = () => {
    return (
      <Carousel
        useKeyboardArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        autoFocus={true}
        autoPlay={true}
      >
        {jokes.length > 0 ? (
          jokes.map((joke, index) => {
            return (
              <div key={index} className="relative">
                <img src={imports[index]} alt="Epic Chuck Norris Background" />

                <span className="absolute left-1/2 bottom-10 -translate-x-1/2 w-5/6 p-2 rounded-lg text-2xl font-semibold bg-black text-white">
                  {joke.value}
                </span>
              </div>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </Carousel>
    );
  };

  return (
    <div className="jokes border border-blue-400 bg-slate-300 rounded-lg flex mx-auto h-min p-4">
      <JokeCarousel />
    </div>
  );
}

export default Jokes;
