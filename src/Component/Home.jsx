import {Element} from 'react-scroll'
import "../Style/Home.css"
import Img from "../assets/img.webp"

const Hero = () => {
    return (
  <div className="hero-wrapper">
    <img src={Img} alt="Hero" className="image" />
    <div className="hero-text">
      BUILDS OFFICES, WEAR-HOUSES, <br />
      AND LARGE INDUSTRIAL PROJECTS
    </div>
    <div className="cut-shape"></div>
    <div className="cut-shape-1"></div>


    <div className="scroll-icon">
      <div className="mouse"></div>
    </div>
  </div>
    );
};

export default Hero;
