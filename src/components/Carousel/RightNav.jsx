function RightNav() {
  return (
    <button className="right-btn" style={styles.right}>
      ▶
    </button>
  );
}

const styles = {
  right: {
    position: "absolute",
    top: "40%",
    right: 0,
    zIndex: 10,
    background: "black",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default RightNav;