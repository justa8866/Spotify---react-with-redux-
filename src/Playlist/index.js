import React, { useState, useEffect } from "react";
import axios from "axios";

function Playlist() {
  const [playlists, setPlaylists] = useState([]);

  const spotifyClient = axios.create({
    baseURL: "https://api.spotify.com",
    timeout: 20 * 1000, // to znaczy poprostu tyle czekaj do 20 sekund na playlisty, nie bedzie zwroc blad
    headers: {
      Authorization:
        "Bearer BQCI1VX7AqTfDO7gTeKioCeld4Fmru37qNH0EgQrKlo036XMlDncqXSNWyDfgYP9GCk1EmbtBZiK93jIjFWSUKtVI_Gqg49FpstV0QEq7EYqF1vNGRukP_2_kl10VbaqhYV-04B_MP-MTU96OmlERR_tBP4285uad1O5xR8nTe5rye5XjzDw9kDaI5oq3Sj5rkaBesq6PwJBT7Ht",
    }, // do tego glownie uzywa sie instance w axios, zeby przechowywac powtarzalne rzeczy jak np token
  });

  const getPlaylists = async () => {
    const response = await spotifyClient.get("/v1/me/playlists"); // fajna czytelnosc i brak kodu zbednego
    console.log(response.data);

    if (response.data) {
      if (response.data.items) {
        setPlaylists(response.data.items);
      }
    }
  };

  useEffect(() => {
    getPlaylists();
  }, []);

  return (
    <div>
      Playlist
      {playlists.length ? (
        <ul>
          {playlists.map((item) => (
            <li>{item.name}</li>
          ))}
        </ul>
      ) : (
        "Brak playlist"
      )}
    </div>
  );
}

export default Playlist;
