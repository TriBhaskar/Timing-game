import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleNameChange(event) {
    setSubmitted(false); //bcoz name is change after every key strok
    setPlayerName(event.target.value);
  }
  function handleClick() {
    setSubmitted(true);
  }
  return (
    <section id="player">
      {submitted ? (
        <h2>Welcome {playerName}</h2>
      ) : (
        <h2>Welcome unknown entity</h2>
      )}

      <p>
        <input type="text" onChange={handleNameChange} value={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
