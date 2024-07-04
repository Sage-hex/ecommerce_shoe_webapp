import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import image1 from "../../assets/logo-nike-WHT.original.png"
import "./Header.css"
import Button from "../Button/Button.jsx"
const Header = () => {

    return(

        <header className="header">
        <section className="headerWrapper">
            <div className="logoWrapper">
                <img src={image1} alt="logo" />
            </div>

            <nav className="navBar">
                <ul className="navLinks">
                    <li>Home</li>
                    <li>About</li>
                    <li>Product</li>
                    <li>Testimonial</li>
                    <li>Shop</li>
                </ul>
            </nav>
            <div className="iconContainer">
                  <IoSearch />
                  <div className="cart">

                  <MdOutlineShoppingCart />
            <div className="box">0</div>
                  </div>
          

            </div>

            <div className="btn">
                <Button>Contact us</Button>
            </div>
        </section>
        
        </header>

    )
}

export default Header




