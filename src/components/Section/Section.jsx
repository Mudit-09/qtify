import React, { useState } from "react";
import styles from "./Section.module.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";

function Section({ title, data }) {
  const [showAll, setShowAll] = useState(false);

  return (
    <div className={styles.section}>
      {/* Header */}
      <div className={styles.header}>
        <h2>{title}</h2>
        <button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Collapse" : "Show All"}
        </button>
      </div>

      {/* Content */}
      {showAll ? (
        <div className={styles.grid}>
          {data.map((item) => (
            <Card key={item.id} album={item} />
          ))}
        </div>
      ) : (
        <Carousel>
          {data.map((item) => (
            <Card key={item.id} album={item} />
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default Section;