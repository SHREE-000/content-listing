export const highlightName = (name, search) => {
    const words = name.split(new RegExp(`(${search})`, "gi"));
    return words.map((word, idx) =>
      word.toLowerCase() === search.toLowerCase() ? (
        <span key={idx} className="text-yellow-300">
          {word}
        </span>
      ) : (
        <span key={idx}>{word}</span>
      )
    );
  };