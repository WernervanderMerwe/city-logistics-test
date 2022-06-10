import Categories from "./components/Categories.js";
import Jokes from "./components/Jokes.js";
import RandomBtn from "./components/RandomBtn.js";

function App() {
  return (
    <div className="app container h-screen mx-auto border flex flex-col p-6 gap-6">
      <RandomBtn></RandomBtn>
      <Categories></Categories>
      <Jokes></Jokes>
    </div>
  );
}

export default App;
