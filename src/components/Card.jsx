function Card({ text,description }) {
  return (
    <div>
      <h1>{text}</h1>
      <p className="max-w-[450px] text-red-300 text-5xl">
        {description}
      </p>
    </div>
  );
}

export default Card;
