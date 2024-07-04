import heroimage from "../../assets/shoe.png";
import "./Hero.css"
import Button from "../Button/Button.jsx"
const Hero = () => {
  return (

    <section className="hero">
      <div className="leftContainer">
        <div className="details">
          <h1>
            Summer Step <br /> collections <br />
            <span>2024</span>
          </h1>
          <p>
            We've been offering the best level of comfort,style and attention to
            details for years.
          </p>

          <Button><a href="#" className="button">
            Discover now
          </a></Button>
          
        </div>
      </div>
      <div className="rightContainer">
        <div className="image">
          <img src={heroimage} className="shoeImage" alt="Summer Step collections" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
