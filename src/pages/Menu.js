
// IMPORT LINK
import { Link } from "react-router-dom";


const Menu = (props) => {
    // Loaded Function
    const loaded = () => {
        return props.foods.map((eachFood) => (
            <div key={eachFood._id} >
                    <div className="menu-food">
                        <Link to={`/menu/${eachFood._id}`} className="link-element">{eachFood.recipeName} </Link>
                        <p>${eachFood.price}.00</p>
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
        <h1>Food Menu </h1>
            {props.foods ? loaded() : loading()}
        </div>
    )
};

export default Menu;