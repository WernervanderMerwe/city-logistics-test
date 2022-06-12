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
  // const isArray = Array.isArray(jokes);
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
              <div key={index}>
                <img src={imports[index]} alt="Epic Chuck Norris Background" />

                <p className="legend font-bold">{joke.value}</p>
              </div>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
        {/* 
        <div>
          <img src={chuckNorris0} alt="Epic Chuck Norris Background" />

          {jokes.length > 0 ? (
            <p className="legend font-semibold">
              {jokes[0]?.value !== undefined
                ? jokes[0].value
                : "No more Jokes 😭 but here's a badass picture"}
            </p>
          ) : (
            "Loading joke"
          )}
        </div>
        <div>
          <img src={chuckNorris1} alt="Epic Chuck Norris Background" />
          {jokes.length > 0 ? (
            <p className="legend font-bold">
              {jokes[1]?.value !== undefined
                ? jokes[1].value
                : "No more Jokes 😭 but here's a badass picture"}
            </p>
          ) : (
            "Loading joke"
          )}
        </div>
        <div>
          <img src={chuckNorris2} alt="Epic Chuck Norris Background" />
          {jokes.length > 0 ? (
            <p className="legend font-bold">
              {jokes[2]?.value !== undefined
                ? jokes[2].value
                : "No more Jokes 😭 but here's a badass picture"}
            </p>
          ) : (
            "Loading joke"
          )}
        </div>
        <div>
          <img src={chuckNorris3} alt="Epic Chuck Norris Background" />
          {jokes.length > 0 ? (
            <p className="legend font-bold">
              {jokes[3]?.value !== undefined
                ? jokes[3].value
                : "No more Jokes 😭 but here's a badass picture"}
            </p>
          ) : (
            "Loading joke"
          )}
        </div> 
        */}
      </Carousel>
    );
  };

  // const JokeList = () => {
  //   return (
  //     <ul className="absolute bottom-0 left-0 z-20 bg-white/75 flex flex-col h-min">
  //       {jokes.length > 0
  //         ? jokes.map((joke, index) => (
  //             <li key={index} className="">
  //               &bull; {joke.value}
  //             </li>
  //           ))
  //         : "Choose a joke category or Choose a random joke!"}
  //     </ul>
  //   );
  // };

  return (
    <div className="jokes border border-blue-400 bg-slate-300 rounded-lg flex mx-auto h-min p-4">
      {/* <div className="relative h-fit border border-red-500">
        <img className="" src={chuckNorris} alt="chuck noris was here" />
        {isArray ? <JokeList /> : <p>{jokes.value}</p>}
      </div> */}
      <JokeCarousel />
    </div>
  );
}

export default Jokes;
