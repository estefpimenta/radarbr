import './SearchBar.css'

function SearchBar() {


    return(
        <div className="searchBar">
            <span className='searchBar__icon'>🔍</span>
            <input className="searchBar__input" type="text" placeholder="Digite um município brasileiro" />
        </div>
    )
}

export default SearchBar