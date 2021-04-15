import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { useState } from "react";
import './App.css';
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  //const user = {username:'amar', password:'1234', isLoggedin: false};
  const [isLoggedIn, setLoggedIn] = useState(true);

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Code Review</h1>
        </header>
        
        <Switch>
          <Nav status={true} />
          { !isLoggedIn && <Redirect from='/'exact to='/login' />}
          <Route path='/login' exact component={Login} />
          <Route path='/register' exact component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
