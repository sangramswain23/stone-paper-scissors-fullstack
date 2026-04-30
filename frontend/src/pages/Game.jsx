import { useState } from "react";
import API from "../services/api";

function Game() {

  // 🔹 Player names
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  // 🔹 Choices
  const [p1Choice, setP1Choice] = useState("");
  const [p2Choice, setP2Choice] = useState("");

  const options = ["Stone", "Paper", "Scissors"];

  // 🔹 Game state
  const [roundNumber, setRoundNumber] = useState(1);
  const [rounds, setRounds] = useState([]);
  const [score, setScore] = useState({ p1: 0, p2: 0 });

  // 🔹 Winner logic
  const getWinner = (p1, p2) => {
    if (p1 === p2) return "Tie";

    if (
      (p1 === "Stone" && p2 === "Scissors") ||
      (p1 === "Scissors" && p2 === "Paper") ||
      (p1 === "Paper" && p2 === "Stone")
    ) return "Player1";

    return "Player2";
  };

  // 🔹 Play round
  const playRound = () => {

    if (!p1Choice || !p2Choice) {
      alert("Select both choices");
      return;
    }

    const winner = getWinner(p1Choice, p2Choice);

    let newScore = { ...score };

    if (winner === "Player1") newScore.p1++;
    else if (winner === "Player2") newScore.p2++;

    setScore(newScore);

    const newRound = {
      roundNumber,
      player1Choice: p1Choice,
      player2Choice: p2Choice,
      winner
    };

    setRounds([...rounds, newRound]);
    setRoundNumber(roundNumber + 1);
  };

  // 🔹 Save game
  const saveGame = async () => {

    const finalWinner =
      score.p1 > score.p2 ? player1 :
      score.p2 > score.p1 ? player2 : "Tie";

    try {
      await API.post("/game/save", {
        player1,
        player2,
        winner: finalWinner,
        rounds
      });

      alert("Game saved successfully!");

      // Reset game
      setRounds([]);
      setScore({ p1: 0, p2: 0 });
      setRoundNumber(1);
      setP1Choice("");
      setP2Choice("");

    } catch (error) {
      console.error(error);
      alert("Error saving game");
    }
  };

  return (
    <div style={{
      maxWidth: "600px",
      margin: "auto",
      textAlign: "center"
    }}>

      <h2>Stone Paper Scissors</h2>

      {/* Player Inputs */}
      <input
        placeholder="Player 1"
        value={player1}
        onChange={(e) => setPlayer1(e.target.value)}
        style={{ margin: "5px", padding: "5px" }}
      />

      <input
        placeholder="Player 2"
        value={player2}
        onChange={(e) => setPlayer2(e.target.value)}
        style={{ margin: "5px", padding: "5px" }}
      />

      <p>{player1} vs {player2}</p>

      <hr />

      {/* Choices */}
      <h3>Select Choices</h3>

      <select
        value={p1Choice}
        onChange={(e) => setP1Choice(e.target.value)}
        style={{ margin: "5px", padding: "5px" }}
      >
        <option value="">Select</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>

      <select
        value={p2Choice}
        onChange={(e) => setP2Choice(e.target.value)}
        style={{ margin: "5px", padding: "5px" }}
      >
        <option value="">Select</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>

      <hr />

      {/* Play Button */}
      <button
        onClick={playRound}
        disabled={roundNumber > 6}
        style={{ padding: "10px", marginTop: "10px" }}
      >
        Play Round
      </button>

      <h3>Round: {roundNumber <= 6 ? roundNumber : 6}</h3>
      <h3>Score: {score.p1} - {score.p2}</h3>

      <hr />

      {/* Rounds */}
      <h3>Rounds</h3>

      {rounds.map((r) => (
        <p key={r.roundNumber}>
          Round {r.roundNumber}: {r.player1Choice} vs {r.player2Choice} → {r.winner}
        </p>
      ))}

      <hr />

      {/* Save */}
      {roundNumber > 6 && (
        <button
          onClick={saveGame}
          style={{ padding: "10px", marginTop: "10px" }}
        >
          Save Game
        </button>
      )}

    </div>
  );
}

export default Game;