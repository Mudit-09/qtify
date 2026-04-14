import React from "react";
import styles from "./Card.module.css";
import Chip from "@mui/material/Chip";

function Card({ album, isSong }) {
  if (!album) return null;

  return (
    <div className={styles.card}>
      <img src={album.image} alt={album.title} />

      <div className={styles.bottom}>
        <Chip
          label={
            isSong
              ? `${album.likes} Likes`
              : `${album.follows} Follows`
          }
          className={styles.chip}
        />
        <p className={styles.title}>{album.title}</p>
      </div>
    </div>
  );
}

export default Card;