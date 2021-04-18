import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useState } from "react";
import './App.css';
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const initialUserState = {username:'', password:'', isLoggedin: false};
  const [user, setUser] = useState(initialUserState);

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Quiz App</h1>
        </header>
        
        <Nav status={false} />

        { !user.isLoggedin && <Redirect from='/' exact to='/login' />}

        <Route path='/login' exact component={Login} />
        <Route path='/register' exact component={Register} />
        
      </div>
    </Router>
  );
}

export default App;
