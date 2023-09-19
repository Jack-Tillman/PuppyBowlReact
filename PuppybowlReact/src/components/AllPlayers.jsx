/*use .filter and .toLowerCase() and .include for the search bar */
import { fetchAllPlayers } from "../API";
import { useState, useEffect } from "react";

export const AllPlayers = () => {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useState("");
  console.log(searchParams);

  useEffect(() => {
    async function getAllPlayers() {
      const APIReesponse = await fetchAllPlayers();
      if (APIReesponse.success) {
        setPlayers(APIReesponse.data.players);
      } else {
        setError(APIReesponse.error.message);
      }
    }
    getAllPlayers();
  }, []);

  const playersToDisplay = searchParams
    ? players.filter((player) =>
        player.name.toLowerCase().includes(searchParams)
      )
    : players;

  return (
    <>
      {players && (
        <div id="playerlist-container">
          <div id="search-bar">
            <label>
              Search{" "}
              <input
                type="text"
                placeholder="search"
                onChange={(e) => setSearchParams(e.target.value.toLowerCase())}
              />
            </label>
          </div>
          {playersToDisplay.map((player) => {
            return (
              <>
                <div id="player-card" key={player.id}>
                  <img src={player.imageUrl} alt="picture of dog" />
                  <div id="player-card-details">
                    <h2>{player.name}</h2>
                    <p>{player.breed}</p>
                    <button
                      className="details-button"
                      onClick={(e) => {
                        // setPlayerId(e.target.value);
                      }}
                    >
                      See details
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

{
  /* {players.map((player) => {
            return (
              <div id="player-card" key={player.id}>
                <img src={player.imageUrl} alt="picture of dog" />
                <div id="player-card-details">
                  <h2>{player.name}</h2>
                  <p>{player.breed}</p>
                  <button
                    className="details-button"
                    onClick={(e) => {
                      // setPlayerId(e.target.value);
                    }}
                  >
                    See details
                  </button>
                </div>
              </div>
            );
          })} */
}
