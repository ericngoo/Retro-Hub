import React, { useState } from 'react';
import MainPage from './MainPage';
import Header from './Header';
import Login from './Login';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

function App() {
  const [user, setUser] = useState("");
  const [attemptedLogin, setAttemptedLogin] = useState(false);

  function handleLogin(user) {
    setUser(user);
    setAttemptedLogin(true);
  }

  function handleHome() {
    setUser("");
    setAttemptedLogin(false);
  }



  return (
    <Router>
      <div>
        <Header handleHome={handleHome}/>

        <Route exact path="/">
          {attemptedLogin ? <Redirect to={{
            pathname: "/" + user
          }} /> : <Login handleLogin={handleLogin} />}
        </Route>

        <Switch>
          <Route path="/:user" children={<MainPage />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
