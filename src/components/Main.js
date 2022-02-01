import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "../pages/Menu";
import Drinks from "../pages/Drinks";
import New from "../pages/New";
import Home from "../pages/Home";

function Main(props) {
    //setting useState
  const [ foods, setFood ] = useState(null)
    //Importing Backend URL
    const URL = 'https://project-backend-3.herokuapp.com/meals'

    //fetching food from backend
    const getFood =async() => {
      const response = await fetch(URL)
      const data = await response.json
      setFood(data);
    }

  // CREATE FOOD
  const createFood = async (eachFood) => {
    // make post request to create food
    if(!props.user) return; // do not run anycode in this function if there's no user
    const token = await props.user.getIdToken();
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
        "Authorization": "Bearer " + token
      },
      body: JSON.stringify(eachFood),
    });
    // update list of food
    getFood();
  };

  // UPDATE FOOD
  const updateFoods = async (eachFood, id) => {
    //make PUT request to update people
    await fetch(URL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(eachFood),
    });
    // update list of food
    getFood();
  };

  // DELETE FOOD
  const deleteFoods = async (id) => {
    // make delete request to delete foodById
    await fetch(URL + id, {
      method: "DELETE",
    });
    // update list of food
    getFood();
  }

  useEffect(() => getFood(), []);
  
  return (
    <main>
      <Switch>
        <Route exact path='/'>
        <Home/>
        </Route>
        <Route path='/menu/:id'
          render={(rp) => (
            <Menu 
            {...rp}
            />
            )}
        />
        <Route exact path='/drinks/:id'
        render={(rp) => (
          <Drinks
          {...rp}
          />
        )}
        />
        <Route exact path='/new'>
          <New/>
        </Route>

      </Switch>
    </main>
      
  );
}


export default Main; 