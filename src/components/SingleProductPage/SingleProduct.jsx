import { data as initialState } from "../../assets/data"; // Ensure the correct path to the data file
import Button from "../Button/Button";
import { MdOutlineShoppingCart } from "react-icons/md";
import './SingleProduct.css'; // Ensure you have a CSS file for styling

const SingleProduct = () => {
    return (
        <div className="mainContainer">
            <div className="imageContainer">
                <img src={initialState[0].image} alt={initialState[0].title} />
            </div>
            <div className="details">
                <h3>Nike's Company</h3>
                <h2>Fall Limited Edition Sneakers</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto modi, magnam unde tempore pariatur culpa mollitia similique sit voluptatibus, voluptatem quam expedita harum nemo sint facilis labore perspiciatis earum ipsum!</p>
                <div className="price">
                    <div className="discount">
                        <h3>$200</h3>
                        <h4>50%</h4>
                    </div>
                    <p>Price before discount</p>
                    <div className="count">
                        <div className="countDiv">
                            <p>-</p>
                            <h3>0</h3>
                            <p>+</p>
                        </div>
                        <div className="btn">
                            <Button className="btnItem"> <MdOutlineShoppingCart /> Add to cart</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
