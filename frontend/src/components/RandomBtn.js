function RandomBtn({ onClick }) {
  return (
    <div className="randomBtn flex flex-row-reverse">
      <button
        className=" border border-orange-300 rounded-lg px-2 text-center text-lg font-bold"
        onClick={onClick}
      >
        Random Joke
      </button>
    </div>
  );
}

export default RandomBtn;
