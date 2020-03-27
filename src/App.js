import React from "react";
import { Route, Link, Switch } from 'react-router-dom'

const App = () => {
  return (
    <div>
    
      <h1 className='Logo'>Lambda Eats</h1>
      <nav>
          <Link to="/"> Home </Link>
          <Link to="/order"> Order Pizza </Link>
      </nav>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/order'>
          <OrderPizza/>
        </Route>

      </Switch>


    </div>
      
    
  );
};
export default App;
