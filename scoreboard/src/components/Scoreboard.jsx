 import { useContext } from "react";
import "./Scoreboard.css";
import { ScoreContext } from "./contexts/ScoreContext.jsx";

export default function Scoreboard() {
  const {score, plusScore, minusScore} = useContext(ScoreContext);

  return (
    <div className="score">
      <h1>Scoreboard </h1>
      <h2>Your current score is :{score}</h2>

      <button onClick={plusScore} style={{ marginRight: "5px" }}>
        +
      </button>
      <button onClick={minusScore}>-</button>
    </div>
  );
}
 


