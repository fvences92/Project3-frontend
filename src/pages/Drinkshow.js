
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
        <img src = {drinko.image} alt={drinko.name}></img>
        <h2>{drinko.price}</h2>
        <h3>{drinko.quantity}</h3>
        <button id='delete' onClick={removeDrinks}>Delete</button>
        <Link to ={`${drinko._id}/edit`}><button>Edit</button></Link
        >
        </div>
        )
    }

export default Drinkshow;