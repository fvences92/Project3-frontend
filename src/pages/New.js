// IMPORT STATE FROM REACT
import { useState } from "react";

const New = (props) => {
    // STATE TO HOLD FORMDATA
    const [newForm, setNewForm] = useState({
        recipeName: "",
        recipeThumb: "",
        price: "",
        qty: "",
    });

    const [newFormDrink, setNewFormDrink] = useState({
        name: "",
        image: "",
        price: "",
        quantity: "",
    });

    // HANDLECHANGE FUNCTION FOR FORM
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };
    // HANDLECHANGE FUNCTION FOR FORM
    const handleChangeDrink = (event) => {
        setNewFormDrink({ ...newFormDrink, [event.target.name]: event.target.value });
    };

    //HANDLESUBMIT FUNCTION FOR FORM
    const handleSubmitFood = (event) => {
        event.preventDefault();
        props.createFood(newForm);
        setNewForm({
            recipeName: "",
            recipeThumb: "",
            price: "",
            qty: "",
        });
    };
    
    //HANDLESUBMIT FUNCTION FOR FORM
    const handleSubmitDrinks = (event) => {
        event.preventDefault();
        props.createDrink(newFormDrink);
        setNewFormDrink({
            name: "",
            image: "",
            price: "",
            quantity: "",
        });
    };




    return (
        <div className="new-box">
            <div className="title-box">
                <h1>New Meal Form</h1>
            </div>
            <form onSubmit={handleSubmitFood}>
                <div className="input-boxes">
                    <h3>Meal</h3>
                    <input type="text" value={newForm.recipeName} name="recipeName" placeholder="Name" onChange={handleChange} />
                    <h3>Image</h3>
                    <input type="text" value={newForm.recipeThumb} name="recipeThumb" placeholder="image URL" onChange={handleChange} />
                    <h3>Quantity</h3>
                    <input type="text" value={newForm.qty} name="qty" placeholder="Quantity" onChange={handleChange} />
                    <h3>Price</h3>
                    <input type="text" value={newForm.price} name="price" placeholder="Price" onChange={handleChange} />
                </div>
                <br />
                <input type="submit" value="Create Meal" className="post-button"/>
            </form>
            <form onSubmit={handleSubmitDrinks}>
                <div className="input-boxes1">
                    <h3>Drinks</h3>
                    <input type="text" value={newFormDrink.name} name="name" placeholder="Name" onChange={handleChangeDrink} />
                    <h3>Image</h3>
                    <input type="text" value={newFormDrink.image} name="image" placeholder="image URL" onChange={handleChangeDrink} />
                    <h3>Price</h3>
                    <input type="text" value={newFormDrink.price} name="price" placeholder="Price" onChange={handleChangeDrink} />
                    <h3>Quantity</h3>
                    <input type="text" value={newFormDrink.quantity} name="quantity" placeholder="Quantity" onChange={handleChangeDrink} />
                </div>
                <br />
                <input type="submit" value="Create Drink" className="post-button"/>
            </form>
        </div>
    )
};

export default New;