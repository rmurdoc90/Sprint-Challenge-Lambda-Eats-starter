import React from "react"
import { Route, Link, Switch } from 'react-router-dom'
import OrderPizza from "./components/OrderPizza"
import Home from './components/Home'



const App = () => {
  return (
    <div>
    
      <h1 className='Logo'>Lambda Eats</h1>
      <nav>
          <Link to="/"> Home </Link>
          <Link to="/pizza"> Order Pizza </Link>
      </nav>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/pizza'>
          <OrderPizza/>
        </Route>

      </Switch>


    </div>
      
    
  );
};
export default App;
