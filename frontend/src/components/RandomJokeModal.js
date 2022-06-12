import React from "react";
import Modal from "react-modal";
import { Button } from "./Button";

import { getData } from "../utils/api";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "0.5rem",
    margin: "10px",
  },
};

const useRandomJoke = () => {
  const getRandomJoke = async () => {
    const rawJoke = await getData("/api/ChuckNorris/random", null);
    return rawJoke.data.value;
  };

  return getRandomJoke;
};

export function RandomJokeModal({ isVisible, setIsVisible }) {
  const [joke, setJoke] = React.useState();
  const getRandomJoke = useRandomJoke();

  React.useEffect(() => {
    if (isVisible) getRandomJoke().then((r) => setJoke(r));
  }, [isVisible]);

  return (
    <Modal
      isOpen={isVisible}
      onRequestClose={() => setIsVisible(false)}
      contentLabel="Random Joke Modal"
      ariaHideApp={false}
      style={customStyles}
    >
      <p className="text-2xl font-bold">Did you know?</p>
      <p className="text-lg font-semibold">{joke}</p>
      <p className="font-semibold">...</p>
      <p className="text-xl font-bold">Fact</p>
      <br />
      <Button
        className="bg-orange-400 hover:bg-orange-600"
        onClick={() => setIsVisible(false)}
        label="Close"
      />
    </Modal>
  );
}
