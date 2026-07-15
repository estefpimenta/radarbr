import "./SearchBar.css";
import Search from "../../assets/search.svg";

function SearchBar({ value, onChange, disabled }) {
  return (
    <div className="searchBar">
      <img className="searchBar__icon" src={Search} alt="Search icon" />
      <input
        className="searchBar__input"
        type="text"
        placeholder="Digite o município e UF (ex.: Campinas - SP)"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        disabled={disabled}
      />
    </div>
  );
}

export default SearchBar;
