function Option({ option }) {
  return (
    <div
      key={option.id}
      className={`option ${option.answer === "CORRECT" ? "correct" : ""}`}
    >
      <span>{option.text}</span>
    </div>
  );
}

export default Option;
