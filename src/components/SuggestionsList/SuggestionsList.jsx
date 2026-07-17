import "./SuggestionsList.css";

function SuggestionsList({ suggestions, onSelect }) {
  return (
    <div className="suggestions-list-container">
      <ul className="suggestions-list">
        {suggestions.slice(0, 8).map((item) => (
          <li key={item} onClick={() => onSelect(item)}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SuggestionsList;
