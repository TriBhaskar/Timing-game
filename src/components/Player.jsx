import { useState, useRef } from "react";

export default function Player() {
  const inputPlayerName = useRef();
  const [playerName, setPlayerName] = useState(null);
  function handleClick() {
    setPlayerName(inputPlayerName.current.value);
    inputPlayerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {playerName ?? "unknown entity"}</h2>
      {/* <h2>Welcome {playerName ? playerName : "unknown entity"}</h2>  we have used javascript shortcut */}
      <p>
        <input ref={inputPlayerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
