
// IMPORT LINK
import { Link } from "react-router-dom";


const Drinks = (props) => {
    // Loaded Function
    const loaded = () => {
        return props.drinks.map((eachDrink) => (
            <div className="home-container">
                <div key={eachDrink.name} className="home-inner-container">
                    <div className="image-link">
                        <Link to={`/drinks/${eachDrink.name}`} className="link-element"><img src={eachDrink.image} alt={eachDrink.name} /></Link>
                    </div>
                    <Link to={`/drinks/${eachDrink.name}`} className="link-element"><div className="title">
                        <h3>{eachDrink.name}</h3>
                    </div></Link>
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