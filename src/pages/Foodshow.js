
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
        <img className="show-img" src = {recipe.recipeThumb} alt={recipe.recipeName}></img>
        <h2>Price: ${recipe.price}.00</h2>
        <h3>We have {recipe.qty} in stock.</h3>
        <Link to ={`${recipe._id}/edit`}><button>Edit</button></Link>
        <button id='delete' onClick={removeFood}>Delete</button>
        </div>
        )
    }


export default Foodshow;