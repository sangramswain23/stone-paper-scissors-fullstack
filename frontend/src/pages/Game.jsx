import { useState } from "react";

function Game() {

  // 🔹 Player names
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");

  // 🔹 Choices
  const [p1Choice, setP1Choice] = useState("");
  const [p2Choice, setP2Choice] = useState("");

  // 🔹 Options
  const options = ["Stone", "Paper", "Scissors"];

  // 🔹 Round + Score
  const [roundNumber, setRoundNumber] = useState(1);
  const [rounds, setRounds] = useState([]);
  const [score, setScore] = useState({ p1: 0, p2: 0 });

  // 🔹 Winner Logic
  const getWinner = (p1, p2) => {
    if (p1 === p2) return "Tie";

    if (
      (p1 === "Stone" && p2 === "Scissors") ||
      (p1 === "Scissors" && p2 === "Paper") ||
      (p1 === "Paper" && p2 === "Stone")
    ) return "Player1";

    return "Player2";
  };

  // 🔹 Play Round
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

  return (
    <div>
      <h2>Stone Paper Scissors</h2>

      {/* Player Inputs */}
      <input
        placeholder="Player 1"
        onChange={(e) => setPlayer1(e.target.value)}
      />

      <input
        placeholder="Player 2"
        onChange={(e) => setPlayer2(e.target.value)}
      />

      <p>Player1: {player1}</p>
      <p>Player2: {player2}</p>

      <hr />

      {/* Choices */}
      <h3>Select Choices</h3>

      <select onChange={(e) => setP1Choice(e.target.value)}>
        <option value="">Select</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>

      <select onChange={(e) => setP2Choice(e.target.value)}>
        <option value="">Select</option>
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>

      <p>P1 Choice: {p1Choice}</p>
      <p>P2 Choice: {p2Choice}</p>

      <hr />

      {/* Button */}
      <button onClick={playRound} disabled={roundNumber > 6}>
        Play Round
      </button>

      <h3>Round: {roundNumber}</h3>
      <h3>Score: {score.p1} - {score.p2}</h3>

      <hr />

      {/* Round History */}
      <h3>Rounds</h3>

      {rounds.map((r) => (
        <p key={r.roundNumber}>
          Round {r.roundNumber}: {r.player1Choice} vs {r.player2Choice} → {r.winner}
        </p>
      ))}

    </div>
  );
}

export default Game;