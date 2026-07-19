import "./SuggestionsList.css";

function SuggestionsList({ suggestions, onSelect, selectedIndex }) {
  return (
    <div className="suggestions-list-container">
      <ul className="suggestions-list">
        {suggestions.slice(0, 8).map((item, index) => (
          <li
            key={item}
            onClick={() => onSelect(item)}
            className={index === selectedIndex ? "selected" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SuggestionsList;
