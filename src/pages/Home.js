import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import axios from "axios";
import { useEffect, useState } from "react";
import Songs from "../components/Songs/Songs";

function Home() {
  const [albums, setAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);

  useEffect(() => {
    axios
      .get("https://qtify-backend.labs.crio.do/albums/top")
      .then((res) => setAlbums(res.data));

    axios
      .get("https://qtify-backend.labs.crio.do/albums/new")
      .then((res) => setNewAlbums(res.data));
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      <Section title="Top Albums" data={albums} />
      <Section title="New Albums" data={newAlbums} />
      <Songs /> 
    </>
  );
}

export default Home;

