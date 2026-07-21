import "./NavBar.css";
import radarIcon from "../../assets/radarIcon.png";

function NavBar() {
  return (
    <div className="navBar">
      <div className="navBar__logo">
        <div className="navBar__logo-container">
          <img
            className="navBar__logo-img"
            src={radarIcon}
            alt="RadarBR icon"
          />
        </div>
        <h1 className="navBar__logo-text">
          <span className="navBar__logo-text-Radar">Radar</span>BR
        </h1>
      </div>
    </div>
  );
}

export default NavBar;
