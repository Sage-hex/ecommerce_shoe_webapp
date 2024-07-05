import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import image1 from "../../assets/logo-nike-WHT.original.png";
import "./Header.css";
import Button from "../Button/Button.jsx";

const Header = () => {
  return (
    <header className="header">
      <section className="headerWrapper">
        <div className="logoWrapper">
          <img src={image1} alt="logo" />
        </div>

        <nav className="navBar">
          <ul className="navLinks">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/post">Post</Link></li>
            <li><Link to="/products">Product</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li>Testimonial</li>
     
          </ul>
        </nav>

        <div className="iconContainer">
          <IoSearch />
          <div className="cart">
            <Link to="/cart">
              <MdOutlineShoppingCart />
              <div className="box">0</div>
            </Link>
          </div>
        </div>

        <div className="btn">
          <Button>Contact us</Button>
        </div>
      </section>
    </header>
  );
};

export default Header;
