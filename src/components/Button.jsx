function MyButton({ color, text }) {
  return (
    <button
      style={{
        color: " red",
        padding: "10px 20px",
        border: "none",

        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
}

export default MyButton;
