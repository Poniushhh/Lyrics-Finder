import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

const NAV_LINKS = ["Home", "Top Lyrics", "About", "Contact"];
const TOP_SONGS = [
  {
    song: "Shape of You",
    artist: "Ed Sheeran",
    lyric: "I'm in love with the shape of you...",
    album: "Divide",
    year: "2017",
    plays: "2.4B",
    duration: "3:53",
    breakdown: [
      { label: "Chorus", icon: "🎤", snippet: "Every day discovering..." },
      { label: "Verse", icon: "🎶", snippet: "The club isn't the best..." },
      { label: "Bridge", icon: "💗", snippet: "Come on, be my baby..." },
    ],
    color: "#FFA940",
    backColor: "#2770B0",
    back2: "#34C759",
  },
  {
    song: "Blinding Lights",
    artist: "The Weeknd",
    lyric: "I said, ooh, I'm blinded by the lights...",
    album: "After Hours",
    year: "2019",
    plays: "2B",
    duration: "3:20",
    breakdown: [
      { label: "Chorus", icon: "✨", snippet: "I can't sleep..." },
      { label: "Verse", icon: "🎧", snippet: "I've been on my own..." },
      { label: "Bridge", icon: "🚗", snippet: "I'm just walking by to let you know..." },
    ],
    color: "#706AE0",
    backColor: "#FAD4E7",
    back2: "#A7FFEB",
  },
  {
    song: "Bad Guy",
    artist: "Billie Eilish",
    lyric: "So you're a tough guy, like it really rough guy...",
    album: "When We All Fall Asleep",
    year: "2019",
    plays: "1.8B",
    duration: "3:14",
    breakdown: [
      { label: "Chorus", icon: "😈", snippet: "I'm the bad guy..." },
      { label: "Verse", icon: "🔪", snippet: "White shirt now red..." },
      { label: "Bridge", icon: "😏", snippet: "I like when you take control..." },
    ],
    color: "#FF5E7B",
    backColor: "#EEE066",
    back2: "#9AE6B4",
  },
  {
    song: "Levitating",
    artist: "Dua Lipa",
    lyric: "You want me, I want you, baby...",
    album: "Future Nostalgia",
    year: "2020",
    plays: "1.5B",
    duration: "3:23",
    breakdown: [
      { label: "Chorus", icon: "🚀", snippet: "I got you, moonlight..." },
      { label: "Verse", icon: "⭐", snippet: "If you wanna run away..." },
      { label: "Bridge", icon: "🌟", snippet: "You can fly away with me..." },
    ],
    color: "#52D1DC",
    backColor: "#F7B23A",
    back2: "#CB6CE6",
  },
  {
    song: "drivers license",
    artist: "Olivia Rodrigo",
    lyric: "I got my driver's license last week...",
    album: "SOUR",
    year: "2021",
    plays: "1.4B",
    duration: "4:02",
    breakdown: [
      { label: "Chorus", icon: "🚗", snippet: "Red lights, stop signs..." },
      { label: "Verse", icon: "💔", snippet: "And I just can't imagine..." },
      { label: "Bridge", icon: "🛣️", snippet: "Yeah, you said forever..." },
    ],
    color: "#F7C4F9",
    backColor: "#54A0FF",
    back2: "#FFC312",
  },
];

function TopSongCard({
  song,
  artist,
  lyric,
  album,
  year,
  plays,
  duration,
  color,
}: typeof TOP_SONGS[number]) {
  return (
    <div className="relative flex items-center justify-center" style={{ minHeight: 520 }}>
      {/* Background Stacked Cards */}
      <div
        className="absolute top-0 left-0 right-0 mx-auto rounded-[38px] h-full w-[97%] z-0"
        style={{ background: "rgba(0,0,0,0.13)", opacity: 0, filter: "blur(4px)", transform: "scale(0.965)", zIndex: 0 }}
      />
      <div
        className="absolute top-3 left-4 right-0 mx-auto rounded-[36px] h-[97%] w-[97%]"
        style={{ background: color + "44", zIndex: 1, filter: "blur(1.5px)" }}
      />
      {/* Main Card */}
      <div
        className="relative w-[410px] rounded-[32px] bg-opacity-95 shadow-2xl px-10 pt-10 pb-8 flex flex-col"
        style={{ background: color, zIndex: 10 }}
      >
        {/* Header */}
        <div className="flex items-center mb-6">
          <div className="bg-white/40 w-20 h-20 rounded-3xl flex items-center justify-center mr-7 text-white text-4xl">
            <svg
              viewBox="0 0 52 52"
              className="w-12 h-12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="26" cy="26" rx="24" ry="17" fill="#fff" />
              <rect x="23" y="4" width="6" height="26" rx="2.5" fill="#706AE0" />
              <ellipse cx="26" cy="43" rx="7" ry="4" fill="#706AE0" />
            </svg>
          </div>
          <div className="flex-1">
            <h3 className="text-3xl font-bold leading-snug text-white mb-2 truncate max-w-[230px]">{song}</h3>
            <span className="text-xl font-semibold opacity-90 truncate block">{artist}</span>
            <span className="block text-base mt-1 text-white opacity-80 italic">Now Trending</span>
          </div>
        </div>
        <hr className="opacity-0 border-t border-white my-4" />
        {/* Lyric Highlight (centered, prominent, higher min-height and wrap) */}
        <div className="text-lg font-bold text-white text-center mb-8 flex items-center justify-center gap-4 min-h-[120px] max-w-full break-words whitespace-pre-line">
          <span className="block max-w-[380px] whitespace-pre-line break-words">{lyric}</span>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-5 my-2 px-2">
          <SongStat icon="💽" label="Album" value={album} />
          <SongStat icon="📅" label="Year" value={year} />
          <SongStat icon="🔥" label="Plays" value={plays} />
          <SongStat icon="⏱️" label="Length" value={duration} />
        </div>
      </div>
    </div>
  );
}

function SongStat({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/15 py-2 pl-2 pr-2.5 rounded-xl text-white">
      <span className="text-lg">{icon}</span>
      <div>
        <span className="block text-xs leading-tight font-bold ">{label}</span>
        <span className="block text-[13px] opacity-80 font-mono">{value}</span>
      </div>
    </div>
  );
}

type LyricsModalData = {
  artist: string;
  song: string;
  lyrics: string;
  album?: string;
  year?: string;
  plays?: string;
  duration?: string;
};

function App() {
  // Added state for search form
  const [artistInput, setArtistInput] = useState("");
  const [songInput, setSongInput] = useState("");
  const [lyricsResult, setLyricsResult] = useState<LyricsModalData | null>(null);
  const [loadingLyrics, setLoadingLyrics] = useState(false);

  // Replace the fetchLyrics function
    async function fetchLyrics(artist: string, song: string): Promise<LyricsModalData> {
      const qArtist = encodeURIComponent(artist);
      const qSong = encodeURIComponent(song);
      const response = await fetch(`/api/lyrics?artist=${qArtist}&song=${qSong}`);
      if (!response.ok) {
        throw new Error('Lyrics fetch failed');
      }
      const data = await response.json();
      /* Expected: {
        artist: string,
        song: string,
        lyrics: string,
        album?: string,
        year?: string,
        plays?: string,
        duration?: string,
      }
      */
      return data;
    }

  // Handle search form submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLyricsResult(null);
    setLoadingLyrics(true);
    try {
          const data = await fetchLyrics(artistInput, songInput);
          setLyricsResult(data);
        } catch (e) {
          setLyricsResult({
            artist: artistInput,
            song: songInput,
            lyrics: 'Failed to fetch lyrics.',
            album: '-', year: '-', plays: '-', duration: '-',
          });
        }
    setLoadingLyrics(false);
  };

  // Handle close
  const handleCloseLyrics = () => {
    setLyricsResult(null);
    setLoadingLyrics(false);
  };

  // New handler for showing lyrics from card
  const handleCardClick = async (card: typeof TOP_SONGS[number]) => {
    setLyricsResult(null);
    setLoadingLyrics(true);
    // Simulate fetching full lyrics for card (could use more detailed prop if you have real data)
    const fullLyrics = await fetchLyrics(card.artist, card.song);
    setLyricsResult({
      artist: card.artist,
      song: card.song,
      lyrics: fullLyrics.lyrics,
      album: card.album,
      year: card.year,
      plays: card.plays,
      duration: card.duration,
    });
    setLoadingLyrics(false);
  };

  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden" style={{ backgroundColor: "#B3D8F6" }}>
      {/* Nav */}
      <header className="relative z-10 flex items-center justify-between px-8 py-5">
        <div className="flex items-center space-x-3">
          <svg
            className="w-12 h-12"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="35" cy="36" rx="6" ry="7" fill="#FAD4E7" />
            <ellipse cx="17" cy="41" rx="8" ry="5" fill="#FAD4E7" />
            <rect x="24" y="6" width="6" height="24" rx="3" fill="#FAD4E7" />
            <rect x="11" y="2" width="6" height="34" rx="3" fill="#FAD4E7" />
          </svg>
          <span className="font-extrabold text-2xl text-pink-400 tracking-wider">LyricsFinder</span>
        </div>
        <nav className="flex space-x-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href="#"
              className="font-semibold text-blue-800 hover:text-pink-400 transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </nav>
      </header>
      {/* Hero/Main */}
      <main
        className="relative flex flex-col lg:flex-row items-start justify-center gap-40 px-8 z-10 w-full max-w-6xl mx-auto my-12"
        style={{ minHeight: "60vh" }}
      >
        {/* LEFT: Find Song */}

        <div className="flex-1 flex flex-col items-center lg:items-start w-full max-w-xl">
          <img
            src="/listening.svg"
            alt="Music listening illustration"
            className="w-64 mb-5"
            style={{ maxWidth: "250px" }}
          />
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 mb-3 text-center lg:text-left leading-tight drop-shadow-md">
            Find the Lyrics to <span className="text-pink-400">Any Song</span>
          </h1>
          <p className="text-lg font-normal text-blue-800 mb-8 text-center lg:text-left max-w-2xl">
            Instantly search for lyrics by song and artist, and discover what everyone’s looking for right now!
          </p>
          <form
            className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-2xl mb-12"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Artist Name"
              className="rounded-xl px-5 py-3 flex-1 focus:outline-none text-blue-900 bg-white/90 placeholder:text-blue-300 shadow-lg text-lg min-h-[45px] h-[45px] min-w-[200px]"
              aria-label="Artist Name"
              value={artistInput}
              onChange={(e) => setArtistInput(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Song Name"
              className="rounded-xl px-5 py-3 flex-1 focus:outline-none text-blue-900 bg-white/90 placeholder:text-blue-300 shadow-lg text-lg min-h-[45px] h-[45px] min-w-[200px]"
              aria-label="Song Name"
              value={songInput}
              onChange={(e) => setSongInput(e.target.value)}
              required
            />
            <button
              type="submit"
              className="rounded-xl px-5 py-3 bg-pink-400 text-white text-lg font-bold shadow-lg hover:bg-pink-500 transition-colors h-[45px] min-h-[45px] flex items-center justify-center"
              style={{ height: "60px", minHeight: "60px" }}
              disabled={loadingLyrics}
            >
              {loadingLyrics ? "Searching..." : "Search"}
            </button>
          </form>

        </div>
        {/* RIGHT: Card Swiper */}
        <div className="flex-1 flex justify-center items-start w-full min-h-[520px] mt-4">
          <Swiper
            modules={[EffectCards]}
            effect={"cards"}
            grabCursor={true}
            cardsEffect={{ perSlideRotate: 2, perSlideOffset: 12 }}
            className="mySwiper max-w-[420px]"
          >
            {TOP_SONGS.map((songdata) => (
              <SwiperSlide key={songdata.song}>
                <div onClick={() => handleCardClick(songdata)} className="cursor-pointer">
                  <TopSongCard {...songdata} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
      {/* Unified lyrics modal overlay */}
      {lyricsResult && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white max-w-2xl w-[98vw] max-h-[88vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-fadeIn">
            <div className="flex items-center justify-between px-8 pt-7 pb-2 border-b border-gray-200">
              <div className="truncate pr-2">
                <div className="font-bold text-blue-900 text-xl mb-1">
                  {lyricsResult.song} — {lyricsResult.artist}
                </div>
                <div className="flex gap-6 text-blue-800/90 text-base font-semibold">
                  <span>
                    Album: <span className="font-mono font-normal">{lyricsResult.album}</span>
                  </span>
                  <span>
                    Year: <span className="font-mono font-normal">{lyricsResult.year}</span>
                  </span>
                  <span>
                    Plays: <span className="font-mono font-normal">{lyricsResult.plays}</span>
                  </span>
                  <span>
                    Length: <span className="font-mono font-normal">{lyricsResult.duration}</span>
                  </span>
                </div>
              </div>
              <button
                className="text-pink-400 hover:text-pink-600 bg-pink-100 hover:bg-pink-200 font-bold rounded-full px-5 py-2 ml-6 text-base transition-colors"
                onClick={handleCloseLyrics}
              >
                Close
              </button>
            </div>
            <div
              className="flex-1 p-8 overflow-auto whitespace-pre-line text-blue-900 text-lg font-mono"
              style={{ lineHeight: 1.6, minHeight: "250px" }}
            >
              {lyricsResult.lyrics}
            </div>
          </div>
        </div>
      )}

      {/* Decorative music notes floaters */}
      <svg
        className="pointer-events-none absolute top-40 left-4 opacity-30 w-12 h-12 z-0"
        viewBox="0 0 48 48"
      >
        <ellipse cx="35" cy="36" rx="6" ry="7" fill="#FAD4E7" />
        <ellipse cx="17" cy="41" rx="8" ry="5" fill="#FAD4E7" />
        <rect x="24" y="6" width="6" height="24" rx="3" fill="#FAD4E7" />
        <rect x="11" y="2" width="6" height="34" rx="3" fill="#FAD4E7" />
      </svg>
      <svg
        className="pointer-events-none absolute top-64 left-1/2 opacity-20 w-9 h-9 z-0"
        viewBox="0 0 48 48"
      >
        <ellipse cx="35" cy="36" rx="6" ry="7" fill="#FAD4E7" />
        <ellipse cx="17" cy="41" rx="8" ry="5" fill="#FAD4E7" />
        <rect x="24" y="6" width="6" height="24" rx="3" fill="#FAD4E7" />
        <rect x="11" y="2" width="6" height="34" rx="3" fill="#FAD4E7" />
      </svg>
      <svg
        className="pointer-events-none absolute top-28 right-10 opacity-10 w-16 h-16 z-0"
        viewBox="0 0 48 48"
      >
        <ellipse cx="35" cy="36" rx="6" ry="7" fill="#FAD4E7" />
        <ellipse cx="17" cy="41" rx="8" ry="5" fill="#FAD4E7" />
        <rect x="24" y="6" width="6" height="24" rx="3" fill="#FAD4E7" />
        <rect x="11" y="2" width="6" height="34" rx="3" fill="#FAD4E7" />
      </svg>
    </div>
  );
}

export default App;
