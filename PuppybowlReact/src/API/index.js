const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2306-ftb-et-web-am/`;

export const fetchAllPlayers = async () => {
  try {
    const response = await fetch(`${API_URL}players`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error, error.message);
  }
}

export const fetchSinglePlayer = async (playerId) => {
  try {
    const response = await fetch(`${API_URL}players/${playerId.id}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error, error.message);
  }
};

export const addNewPlayer = async (playerObject) => {
  try {
    const response = await fetch(`${API_URL}players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: playerObject.name,
        breed: playerObject.breed,
      }),
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error, error.message);
  }
};

export const deletePlayer = async (playerId) => {
  try {
    const response = await fetch(`${API_URL}players/${playerId}`, {
      method: "DELETE",
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error, error.message);
  }
};

fetchAllPlayers();

// fetchSinglePlayer(1);
// addNewPlayer({
//     name: "newdog",
//     breed: "newbreed"
// })
