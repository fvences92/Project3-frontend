
// IMPORT LINK
import { Link } from "react-router-dom";


const Menu = (props) => {
    // Loaded Function
    const loaded = () => {
        return props.foods.map((eachFood) => (
            <div className="home-container">
                <div key={eachFood._recipieName} className="home-inner-container">
                    <div className="image-link">
                        <Link to={`/menu/${eachFood._recipeName}`} className="link-element">{eachFood.recipeName} {eachFood.price}</Link>
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
        <h1>Menu Page</h1>
            {props.foods ? loaded() : loading()}
        </>
    )
};

export default Menu;