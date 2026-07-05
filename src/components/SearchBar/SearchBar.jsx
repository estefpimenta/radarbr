import './SearchBar.css'

function SearchBar({ value, onChange, disabled }) {


    return(
        <div className="searchBar">
            <span className='searchBar__icon'>🔍</span>
            <input 
                className="searchBar__input" 
                type="text" 
                placeholder="Digite um município brasileiro" 
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
            />
        </div>
    )
}

export default SearchBar