import React from 'react';
import { Route, Link } from 'react-router-dom'
import Home from './Home';
import About from './About'
import View from './View'

const App = () => {
  return (
    <div>
      <h1>Hello world!</h1>
      <hr/>
      <Link to='/home'> Home </Link>
      <Link to='/about'> About </Link>
      <Link to='/view/1'> View 1 </Link>
      <Link to='/view/2'> View 2 </Link>
      <hr/>
      <Route path='/home' component={ Home }/>
      <Route path='/about' component={ About }/>
      <Route path='/view/:id' component={ View }/>
    </div>
  );
}

export default App;
