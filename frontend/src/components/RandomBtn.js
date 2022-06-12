import { Button } from "./Button";

function RandomBtn({ onClick }) {
  return (
    <div className="randomBtn flex flex-row-reverse">
      <Button
        className="bg-orange-400 hover:bg-orange-600 px-2"
        onClick={onClick}
        label={"Random Joke"}
      />
    </div>
  );
}

export default RandomBtn;
