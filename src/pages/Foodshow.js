
import { Link } from "react-router-dom";

function Foodshow (props){

    const id = props.match.params.id
    const foods = props.foods
    const recipe = foods.find(p => p._id === id )
        
    const removeFood = () => {
        props.deleteFoods(recipe._id); 
        props.history.push ('/menu') 
        }

    return (
        <div>
        <h1>{recipe.recipeName}</h1>
        <img src = {recipe.recipeThumb} alt={recipe.recipeName}></img>
        <h2>{recipe.price}</h2>
        <h3>{recipe.qty}</h3>
        <button id='delete' onClick={removeFood}>Delete</button>
        </div>
        )
    }


export default Foodshow;