import React from 'react';
import './App.css';

import HomePage from './pages/homepage/hompage.component'

import {  Route,Switch,Link  } from 'react-router-dom'

export const HatsPage = props =>{
  console.log('props: ', props)
  return(
    <div>
      <h1>HATS PAGE</h1>
      <h2>Hello World</h2>
      <button onClick={()=> props.history.push('/')}>Return </button>
    </div>
  )
}

function App(props) {
  
  return (
    <div>
      {/* renders HomPage Component */}
      {/* <HomePage /> */}
      <Link to="/hats">Hats Page</Link>
     

      <Switch>
        <Route  exact path = '/' component = {HomePage} />
        <Route path = '/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
