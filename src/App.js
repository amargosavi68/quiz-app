import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useState } from "react";
import './App.css';
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  //const user = {username:'amar', password:'1234', isLoggedin: false};
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Code Review</h1>
        </header>
        
        <Nav status={false} />
        { !isLoggedIn && <Redirect from='/' exact to='/login' />}
        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        
      </div>
    </Router>
  );
}

export default App;
