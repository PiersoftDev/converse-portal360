import "./Home.css";
import HomePagePalette from "../../images/homepagepalette.png";
import Finance from "../../images/finance.svg";
import HR from "../../images/hr.svg";
import Inventory from "../../images/inventory.svg";
import Construction from "../../images/construction.svg";
export const Home = () => {
  return (
    <div className="content">
      <div className="details">
        <div className="introduction-text">
          <span className="primary">Building Success,</span>
          <br />
          <span className="primary">
            <span className="strike-through">one</span> multiple projects at a time.
          </span>
          <br />
          <br />
          <span className="secondary">
            Easily manage projects, track expenses, <br /> automate procurement processes & more.
          </span>
          <div className="cta-container">
            <button>Get Started</button>
          </div>
        </div>
        <div className="construction-image-palette">
          <img src={HomePagePalette} className="palette" alt="Home Page Palette" />
          <img src={Construction} alt="Construction" className="construction-image" />
        </div>
      </div>
      <div className="features">
        <div className="title">Features</div>
        <div className="cards">
          <div>
            <img src={Finance} alt="Finance" />
            <br />
            <p>Finance</p>
          </div>
          <div>
            <img src={HR} alt="Human Resources" />
            <p>Human Resources</p>
          </div>
          <div>
            <img src={Inventory} alt="Inventory" />
            <p>Inventory</p>
          </div>
        </div>
      </div>
    </div>
  );
};
