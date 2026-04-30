import { useEffect, useState } from "react";
import API from "../services/api";

function History() {

  const [games, setGames] = useState([]);

  // 🔥 Fetch data when page loads
  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = async () => {
    try {
      const res = await API.get("/game/all");
      setGames(res.data.data); // because of ApiResponse wrapper
    } catch (error) {
      console.error(error);
      alert("Error fetching games");
    }
  };

  return (
    <div>
      <h2>Game History</h2>

      {games.length === 0 && <p>No games found</p>}

      {games.map((game, index) => (
        <div key={index} style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
          
          <h3>{game.player1} vs {game.player2}</h3>
          <p>Winner: {game.winner}</p>

          <h4>Rounds:</h4>

          {game.rounds.map((r) => (
            <p key={r.roundNumber}>
              Round {r.roundNumber}: {r.player1Choice} vs {r.player2Choice} → {r.winner}
            </p>
          ))}

        </div>
      ))}

    </div>
  );
}

export default History;