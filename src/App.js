import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useState } from "react";
import './App.css';
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const initialUserState = {username:'', password:'', isLoggedin: false};
  const [user, setUser] = useState(initialUserState);
  const [ques, setQuestion] = useState('');

  const fetchData = async (e) => {
    const questions = await fetch('https://quizapi.io/api/v1/questions?apiKey=cfN6rMdbSfXXfjE8xsbdTrxNkTUKLoot7zvIsyT2')
    const data = await questions.json();
    setQuestion(data[0].question)
  }

  return (
    <Router>
      <div className="App">
        <header>
          <h1>Quiz App</h1>
        </header>
        
        <Nav status={false} />

        { !user.isLoggedin && <Redirect from='/' exact to='/login' />}

        <Route path='/login' exact user={user} component={Login} />
        <Route path='/register' exact component={Register} />
        
      </div>

      <div>
        <button onClick={fetchData}>Fetch Data</button>
        <p>
          {ques.length > 0 ? ques: ''}
        </p>
      </div>
    </Router>
  );
}

export default App;
