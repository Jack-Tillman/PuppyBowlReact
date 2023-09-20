/* eslint-disable react/prop-types */
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchSinglePlayer, deletePlayer } from "../API";

export const SinglePlayer = () => {
  const urlId = useParams();
  const [singlePlayer, setSinglePlayer] = useState({});
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function getPlayerById(urlId) {
      const APIReesponse = await fetchSinglePlayer(urlId);
      console.log(APIReesponse);
      if (APIReesponse.success) {
        console.log(APIReesponse.data.player);
        setSinglePlayer(APIReesponse.data.player);
      } else {
        setError(APIReesponse.error.message);
      }
    }
    getPlayerById(urlId);
  }, [urlId]);

  return (
    <>
      {singlePlayer && (
        <div id="player-detail-container">
            {error && <span>Uh oh, error getting player details! Full error here: {error.message}</span>}
          <div id="singleplayer-view" key={singlePlayer.id}>
            <img
              src={singlePlayer.imageUrl}
              alt="beautiful picture of a beautiful dog"
            />
            <h2 className="name-h2">Name:{singlePlayer.name}</h2>
            <p className="breed-p">Breed:{singlePlayer.breed}</p>
            <p className="status-p">Status: {singlePlayer.status}</p>
            <p>Added to roster: {singlePlayer.createdAt}</p>
            <p>Last updated: {singlePlayer.updatedAt}</p>
            <p>Team ID: {singlePlayer.teamId}</p>
            <p>Cohort ID: {singlePlayer.cohortId}</p>
            <button className="close-button" onClick={() => navigate(`..`)}>
              Close
            </button>
            <button className="remove-button" onClick={() => {
                  console.log(`Why do you want to remove ${singlePlayer.name}??`);
                  /* uncomment out line below to unleash chaos */
                //    deletePlayer(singlePlayer.id) 
            }}>
              Remove
            </button>
          </div>
        </div>
      )}
    </>
  );
};

/*


    const readableCreatedDate = new Date(player.createdAt).toLocaleDateString();
    const readableUpdatedAt = new Date(player.updatedAt).toLocaleDateString();
    

*/
