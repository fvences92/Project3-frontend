import { useState } from 'react'

function DrinkEdit(props) {
    
    const id = props.match.params.id
    const drinks = props.drinks
    const drink = drinks.find(p => p._id === id )

const [ editForm, setEditForm ] = useState(drink);


  // handleChange function for form
  const handleChangeDrink = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  }

  const handleSubmitDrink = event => {
    event.preventDefault();
    // you will have an undefined parameter if you do not pass person._id
    props.updateDrinks(editForm, drink._id);
    props.history.push(`/drinks/${drink._id}`);
  }


  return (
    <div className="Drink">
      <h1>{drink.name}</h1>
      <img src={drink.image} alt={drink.name} />
      <form onSubmit={handleSubmitDrink}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChangeDrink}
        />
        <input
          type="text"
          value={editForm.image}
          name="image"
          placeholder="image URL"
          onChange={handleChangeDrink}
        />
        <input
          type="text"
          value={editForm.price}
          name="price"
          placeholder="price"
          onChange={handleChangeDrink}
        />
        <input
          type="text"
          value={editForm.quantity}
          name="quantity"
          placeholder="quantity"
          onChange={handleChangeDrink}
        />
        <input type="submit" value="Update Drink" />
      </form>
    </div>
  )
  }

export default DrinkEdit;