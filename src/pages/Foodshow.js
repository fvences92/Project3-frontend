
import { Link } from "react-router-dom";

function Foodshow (props){

    const id = props.match.params.id
    const foods = props.foods
    const recipe = foods.find(p => p._id === id )
        
    
    return (
        <div>
            
        <h1>{recipe.name}</h1>
        </div>
        )
    }

export default Foodshow;