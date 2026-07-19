import "./SuggestionsList.css";

function SuggestionsList({
  suggestions,
  onSelect,
  selectedIndex,
  setSelectedIndex,
}) {
  return (
    <div className="suggestions-list-container">
      <ul className="suggestions-list">
        {suggestions.slice(0, 8).map((item, index) => (
          <li
            key={item}
            onClick={() => onSelect(item)}
            className={index === selectedIndex ? "selected" : ""}
            onMouseEnter={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SuggestionsList;
