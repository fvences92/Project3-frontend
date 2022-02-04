
import { Link } from "react-router-dom";

function Drinkshow (props){

    const id = props.match.params.id
    const drinks = props.drinks
    const drinko = drinks.find(p => p._id === id )
        
    
    const removeDrinks = () => {
        props.deleteDrinks(drinko._id); 
        props.history.push ('/drinks') 
        }

    return (
        <div>
        <h1>{drinko.name}</h1>
        <img className="show-img" src = {drinko.image} alt={drinko.name}></img>
        <h2>Price: ${drinko.price}.00</h2>
        <h3>We have {drinko.quantity} in stock.</h3>
        <Link to ={`${drinko._id}/edit`}><button>Edit</button></Link
        >
        <button id='delete' onClick={removeDrinks}>Delete</button>
        </div>
        )
    }

export default Drinkshow;