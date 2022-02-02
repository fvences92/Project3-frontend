import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Menu from "../pages/Menu";
import Drinks from "../pages/Drinks";
import New from "../pages/New";
import Home from "../pages/Home";
import About from '../pages/About'

function Main(props) {
    //setting useState
  const [ foods, setFood ] = useState(null)
    //Importing Backend URL
    const URL = 'https://project-backend-3.herokuapp.com/meals'

    //fetching food from backend
    const getFood = async() => {
      const response = await fetch(URL)
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
        <Home foods={ foods } />
        </Route>
        <Route path='/menu/'
          render={(rp) => (
            <Menu 
            {...rp}
            />
            )}
        />
        <Route exact path='/drinks/'
        render={(rp) => (
          <Drinks
          {...rp}
          />
        )}
        />
        <Route exact path='/new'>
          <New/>
        </Route>

        <Route exact path='/about'>
          <About/>
        </Route>

      </Switch>
    </main>
      
  );
}


export default Main; 