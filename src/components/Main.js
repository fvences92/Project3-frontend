import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "../pages/Menu";
import Drinks from "../pages/Drinks";
import New from "../pages/New";
import Home from "../pages/Home";
import About from '../pages/About'
import Foodshow from '../pages/Foodshow'
import Drinkshow from '../pages/Drinkshow'

function Main(props) {
  //setting useState
  const [foods, setFood] = useState(null)
  const [drinks, setDrink] = useState(null)
  //Importing Backend URL
  const FURL = 'https://project-backend-3.herokuapp.com/meals'
  const DURL = 'https://project-backend-3.herokuapp.com/drinks'

  //fetching food from backend
  const getFood = async () => {
    const response = await fetch(FURL)
    const data = await response.json()
    setFood(data);
  }

  // CREATE FOOD
  const createFood = async (eachFood) => {
    // make post request to create foo
    // update list of food
    getFood();
  };

  // UPDATE FOOD
  const updateFoods = async (eachFood, id) => {
    //make PUT request to update people
    await fetch(FURL + id, {
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
    await fetch(FURL + id, {
      method: "DELETE",
    });
    // update list of food
    getFood();
  }

  useEffect(() => getFood(), []);
  //fetching food from backend
  
  /////////////////////////////////////////////////////
  
  const getDrink = async () => {
    const response = await fetch(DURL)
    const data = await response.json()
    setDrink(data);
  }

  // CREATE FOOD
  const createDrink = async (eachDrink) => {
    // make post request to create foo
    // update list of food
    getDrink();
  };

  // UPDATE Drink
  const updateDrinks = async (eachDrink, id) => {
    //make PUT request to update people
    await fetch(DURL + id, {
      method: "PUT",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(eachDrink),
    });
    // update list of Drink
    getDrink();
  };

  // DELETE Drink
  const deleteDrinks = async (id) => {
    // make delete request to delete DrinkById
    await fetch(DURL + id, {
      method: "DELETE",
    });
    // update list of Drink
    getDrink();
  }

  
  useEffect(() => getDrink(), []);

  return (
    <main>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/menu/'
          render={(rp) => (
            <Menu
              foods={foods}
              {...rp} />
          )}
        />

        <Route path='/menu/:id'
          render={(rp) => (
            <Foodshow
              foods={foods}
              updateFoods={updateFoods}
              deleteFoods={deleteFoods}
              {...rp} />
          )}></Route>
        <Route exact path='/drinks/'
          render={(rp) => (
            <Drinks
              {...rp} />
          )} />

        <Route path='/drinks/:id'
          render={(rp) => (
            <Drinkshow
              drinks={drinks}
              updateDrinks={updateDrinks}
              deleteDrinks={deleteDrinks}
              {...rp} />
          )}></Route>

        <Route path='/new'>
          <New createFood={createFood}
            createDrink={createDrink} />

        </Route><Route path='/about'>
          <About />
        </Route>

      </Switch>
    </main>

  );
}


export default Main; 