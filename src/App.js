import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import Registration from './Components/Pages/Registration/Registration';
import EventTasks from './Components/Pages/EventTasks/EventTasks';
import Admin from './Components/Pages/Admin/Admin';
import NotMatch from './Components/Pages/NotMatch/NotMatch';


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login/:id">
            <Login />
          </Route>
          <Route path="/registration/:id">
            <Registration />
          </Route>
          <Route path="/eventTasks">
            <EventTasks />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
