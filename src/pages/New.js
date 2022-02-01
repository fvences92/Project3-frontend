// IMPORT STATE FROM REACT
import { useState } from "react";

const New = (props) => {
    // STATE TO HOLD FORMDATA
    const [newForm, setNewForm] = useState({
        recipieName: "",
        recipieThumb: "",
        price: "",
        qty: "",
    });

    // HANDLECHANGE FUNCTION FOR FORM
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    };

    //HANDLESUBMIT FUNCTION FOR FORM
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createFood(newForm);
        setNewForm({
            recipieName: "",
            recipieThumb: "",
            price: "",
            qty: "",
        });
    };
    return (
        <div className="new-box">
            <div className="title-box">
                <h1>New Recipe Form</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="input-boxes">
                    <h3>Recipie</h3>
                    <input type="text" value={newForm.recipieName} name="title" placeholder="Name" onChange={handleChange} />
                    <h3>Image</h3>
                    <input type="text" value={newForm.recipieThumb} name="image" placeholder="image URL" onChange={handleChange} />
                    <h3>Quantity</h3>
                    <input type="text" value={newForm.qty} name="description" placeholder="Quantity" onChange={handleChange} />
                </div>
                <br />
                <input type="submit" value="Create Recipe" className="post-button"/>
            </form>
        </div>
    )
};

export default New;