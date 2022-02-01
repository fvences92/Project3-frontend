
// IMPORT LINK
import { Link } from "react-router-dom";


const Menu = (props) => {
    // Loaded Function
    const loaded = () => {
        return props.foods.map((eachFood) => (
            <div className="home-container">
                <div key={eachFood._recipieName} className="home-inner-container">
                    <div className="image-link">
                        <Link to={`/food/${eachFood._recipieName}`} className="link-element"><img src={eachFood.recipieThumb} alt={eachFood.recipieName} /></Link>
                    </div>
                    <Link to={`/food/${eachFood._recipieName}`} className="link-element"><div className="title">
                        <h3>{eachFood._recipieName}</h3>
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
            {props.foods ? loaded() : loading()}
        </>
    )
};

export default Menu;