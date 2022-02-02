
// IMPORT LINK
import { Link } from "react-router-dom";


const Drinks = (props) => {
    // Loaded Function
    const loaded = () => {
        return props.drinks.map((eachDrink) => (
            <div key={eachDrink._id} className="home-container">
                <div className="home-inner-container">
                    <div className="image-link">
                        <Link to={`/drinks/${eachDrink._name}`} className="link-element">{eachDrink._name}</Link>
                    </div>
                </div>
                <div className="footer-space-container">
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

        <>
        <h1>Drink Page</h1>
            {props.drinks ? loaded() : loading()}
        </>
    )
};

export default Drinks;