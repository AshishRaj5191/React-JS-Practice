import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import SongItem from "./components/SongItem";

function App() {
  const [count, setCount] = useState(0);

  const data = [
    {
      id: '1',
      title: "Kesariya",
      artist: "Arijit Singh",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZqNl8nV5y--0-5oY5QS4TTkD7MZ_ZNGrer6GZ-t4wPQ&s",
    },
    {
      id: '2',
      title: "Tum Hi Ho",
      artist: "Arijit Singh",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCwJ5T_gzjxLd43jr7MjhhV7x9n24lKnJvgqEWddcbfA&s=10",
    },
    {
      id: '3',
      title: "Kal Ho Naa Ho",
      artist: "Sonu Nigam",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLfhpU9HJqTE6dO6HXR0opMgoUezMgoZFmFZxly2SsHA&s=10",
    },
    {
      id: '4',
      title: "Tujh Mein Rab Dikhta Hai",
      artist: "Roop Kumar Rathod",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTNZELv14_3vJLrwDIHJdHWTLmWs7ssSzAJbOCqNEx0Q&s=10",
    },
    {
      id: '5',
      title: "Agar Tum Saath Ho",
      artist: "Alka Yagnik & Arijit Singh",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5eKNUZ9xpSGKPr_EP-hYFHo-Hl7WkUNJcDjI1Jq0xsw&s=10",
    },
    {
      id: '6',
      title: "Chaiyya Chaiyya",
      artist: "Sukhwinder Singh & Sapna Awasthi",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZZsrQ8E1jey6KhfECLQQuW_JsiK_dkJjJKxnIlLidaw&s=10",
    },
    {
      id: '7',
      title: "Galliyan",
      artist: "Ankit Tiwari",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTb_CvUStBDGCwKg_Vt1lb99SDT552oIYYYgG7E4-iMw&s=10",
    },
  ];

  return (
    <>
      <h2>🎵My Music Playlist</h2>
      {data.map((song) => (
        <SongItem
          key={song.id}
          title={song.title}
          artist={song.artist}
          id={song.id}
          image={song.image}
        />
      ))}
    </>
  );
}

export default App;
