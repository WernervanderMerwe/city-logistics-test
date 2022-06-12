import React from "react";

import Categories from "./components/Categories.js";
import Jokes from "./components/Jokes.js";
import RandomBtn from "./components/RandomBtn.js";
import { RandomJokeModal } from "./components/RandomJokeModal.js";

import { getData } from "./utils/api";

function App() {
  const [listOfJokes, setListOfJokes] = React.useState([]);
  const [isVisible, setIsVisible] = React.useState(false);

  const handleCategorySelection = async (category) => {
    try {
      const rawJokeResponse = await getData("/api/chucknorris/joke", {
        category,
        jokeLimit: 4,
      });
      setListOfJokes(rawJokeResponse.data);
    } catch (error) {
      console.error("there was an error with the request");
    }
  };

  return (
    <div className="App container h-screen mx-auto bg-slate-50 flex flex-col p-6 gap-6">
      <RandomBtn onClick={() => setIsVisible(true)} />
      <Categories handleClick={handleCategorySelection}></Categories>
      <Jokes jokes={listOfJokes}></Jokes>
      <RandomJokeModal isVisible={isVisible} setIsVisible={setIsVisible} />
    </div>
  );
}

export default App;
