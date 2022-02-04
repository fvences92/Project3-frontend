
// IMPORT LINK
import { Link } from "react-router-dom";


const Drinks = (props) => {
    // Loaded Function
    const loaded = () => {
        return props.drinks.map((eachDrink) => (
            <div key={eachDrink._id} className="home-container">
                    <div className="image-link">
                        <Link to={`/drinks/${eachDrink._id}`} className="link-element">{eachDrink.name}</Link>
                        <p>${eachDrink.price}.00</p>
                        <hr></hr>
                    </div>
            </div>
        ));
    };
    // Loading Function
    const loading = () => {
        return (
            <div className="loading-container">
                <div className="load-animation"></div>
            </div>
        )
    }
    return (

        <div className="menu-container">
        <h1>Drink Menu</h1>
            {props.drinks ? loaded() : loading()}
        </div>
    )
};

export default Drinks;