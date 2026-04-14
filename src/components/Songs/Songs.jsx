import React, { useEffect, useState } from "react";
import axios from "axios";
import { Tabs, Tab } from "@mui/material";
import Carousel from "../Carousel/Carousel";
import Card from "../Card/Card";

function Songs() {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedTab, setSelectedTab] = useState("all");

  useEffect(() => {
    axios
      .get("https://qtify-backend.labs.crio.do/songs")
      .then((res) => setSongs(res.data));

    axios
      .get("https://qtify-backend.labs.crio.do/genres")
      .then((res) => setGenres(res.data.data));
  }, []);

  const filteredSongs =
    selectedTab === "all"
      ? songs
      : songs.filter(
          (song) => song.genre && song.genre.key === selectedTab
        );

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ color: "white" }}>Songs</h2>

      <Tabs
        value={selectedTab}
        onChange={(e, val) => setSelectedTab(val)}
        textColor="inherit"
        TabIndicatorProps={{ style: { backgroundColor: "#34C94B" } }}
      >
        <Tab label="All" value="all" />
        {genres.map((genre) => (
          <Tab key={genre.key} label={genre.label} value={genre.key} />
        ))}
      </Tabs>

      <Carousel>
        {filteredSongs.map((song) => (
          <Card key={song.id} album={song} isSong={true} />
        ))}
      </Carousel>
    </div>
  );
}

export default Songs;