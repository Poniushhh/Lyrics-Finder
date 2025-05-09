import React, { useState } from 'react';
import './App.css';

function App() {
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [error, setError] = useState("");

  // Лирикс авах функц
  const fetchLyrics = () => {
    if (!artist || !song) {
      setError("Please enter both artist and song name.");
      return;
    }

    setError("");  // Error-ийг устгах
    fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Lyrics not found.');
        }
        return response.json();
      })
      .then(data => setLyrics(data.lyrics))
      .catch(error => setError(error.message));
  };

  return (
    <div className="App">
      <h1>Lyrics Finder</h1>

      {/* Artist нэр оруулах хэсэг */}
      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />

      {/* Song нэр оруулах хэсэг */}
      <input
        type="text"
        placeholder="Song"
        value={song}
        onChange={(e) => setSong(e.target.value)}
      />

      {/* Хайх товч */}
      <button onClick={fetchLyrics}>Find Lyrics</button>

      {/* Алдаа харуулах хэсэг */}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {/* Лирикс харуулах хэсэг */}
      {lyrics && (
        <div>
          <h2>Lyrics:</h2>
          <pre>{lyrics}</pre>
        </div>
      )}
    </div>
  );
}

export default App;
