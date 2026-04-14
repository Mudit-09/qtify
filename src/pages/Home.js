import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Card from "../components/Card/Card";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("https://qtify-backend.labs.crio.do/albums/top")
      .then((res) => {
        console.log(res.data); // DEBUG
        setAlbums(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      <div className="cardSection">
        {albums.length === 0 ? (
          <p style={{ color: "white" }}>Loading...</p>
        ) : (
          albums.map((album) => (
            <Card key={album.id} album={album} />
          ))
        )}
      </div>
    </>
  );
}

export default Home;