function LeftNav() {
  return (
    <button className="left-btn" style={styles.left}>
      ◀
    </button>
  );
}

const styles = {
  left: {
    position: "absolute",
    top: "40%",
    left: 0,
    zIndex: 10,
    background: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default LeftNav;