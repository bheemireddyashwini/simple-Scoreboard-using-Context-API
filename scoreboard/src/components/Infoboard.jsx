import { useContext } from "react";
import { ScoreContext } from "./contexts/ScoreContext";

export default function Infoboard() {
  const { score } = useContext(ScoreContext);
  return (
    <div className="info">
      <div>
        {score > 100 ? <h3>Good job!</h3> : <h3>&ldquo;Let&apos;s make it over 100!&#34;</h3>}
      </div>
    </div>
  );
}
