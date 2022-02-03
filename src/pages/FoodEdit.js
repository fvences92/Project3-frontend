import { useState } from 'react'

function FoodEdit(props) {
    
    const id = props.match.params.id
    const foods = props.foods
    const recipe = foods.find(p => p._id === id )

const [ editForm, setEditForm ] = useState(recipe);


  // handleChange function for form
  const handleChangeFood = event => {
    setEditForm({ ...editForm, [event.target.name]: event.target.value });
  }

  const handleSubmitFood = event => {
    event.preventDefault();
    // you will have an undefined parameter if you do not pass person._id
    props.updateFoods(editForm, recipe._id);
    props.history.push(`/menu/${recipe._id}`);
  }


  return (
    <div className="FoodEdit">
      <h1>{recipe.name}</h1>
      <img src={recipe.recipeThumb} alt={recipe.name} />
      <form onSubmit={handleSubmitFood}>
        <input
          type="text"
          value={editForm.name}
          name="name"
          placeholder="name"
          onChange={handleChangeFood}
        />
        <input
          type="text"
          value={editForm.recipeThumb}
          name="image"
          placeholder="image URL"
          onChange={handleChangeFood}
        />
        <input
          type="text"
          value={editForm.price}
          name="price"
          placeholder="price"
          onChange={handleChangeFood}
        />
        <input
          type="text"
          value={editForm.qty}
          name="quantity"
          placeholder="quantity"
          onChange={handleChangeFood}
        />
        <input type="submit" value="Update Food" />
      </form>
    </div>
  )
  }

export default FoodEdit;