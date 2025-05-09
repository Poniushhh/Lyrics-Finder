import React, { useState } from 'react';
import './App.css';
const API_BASE = process.env.REACT_APP_LYRICS_API;
function App() {
  const [artist, setArtist] = useState('');
  const [title, setTitle] = useState('');
  const [lyrics, setLyrics] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchLyrics = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:8081/api/lyrics?artist=${artist}&title=${title}`);
      const data = await response.text(); // text буцаадаг гэж үзье
      setLyrics(data);
    } catch (error) {
      setLyrics('Алдаа гарлаа. Уучлаарай.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Lyrics Finder 🎵</h1>
      <input
        type="text"
        placeholder="Artist"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <input
        type="text"
        placeholder="Song Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={fetchLyrics}>Lyrics хайх</button>
      <div className="lyrics-box">
        {loading ? <p>Уншиж байна...</p> : <pre>{lyrics}</pre>}
      </div>
    </div>
  );
}

export default App;
