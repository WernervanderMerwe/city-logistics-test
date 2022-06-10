import * as React from "react";

function Jokes() {
  const [state, setState] = React.useState("");

  React.useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setState(data));
  }, []);
  console.log(state);

  return (
    <div className="jokes border border-blue-400 rounded-lg flex justify-center h-full p-4">
      <h1 className="text-3xl font-bold">this is the jokes part</h1>
    </div>
  );
}

export default Jokes;
