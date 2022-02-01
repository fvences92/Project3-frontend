import { Route, Switch } from "react-router-dom";
import Menu from "../pages/Menu";
import Drinks from "../pages/Drinks";
import New from "../pages/New";
import Home from "../pages/Home";

function Main(props) {

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
        <Route path='/drinks/:id'
        render={(rp) => (
          <Drinks
          {...rp}
          />
        )}
        />
        <Route path='/new'>
          <New/>
        </Route>

      </Switch>
    </main>
      
  );
}


export default Main; 