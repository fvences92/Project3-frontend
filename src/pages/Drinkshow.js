
import { Link } from "react-router-dom";

function Drinkshow (props){

    const id = props.match.params.id
    const drinks = props.drinks
    const drinko = drinks.find(p => p._id === id )
        
    
    return (
        <div>
            
        <h1>{drinko._id}</h1>
        </div>
        )
    }

export default Drinkshow;