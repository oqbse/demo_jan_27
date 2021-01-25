import React, {lazy, Suspense} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
const Home = lazy(() => import("./screens/Home"));
const About = lazy(() =>  import("./screens/About"));
const Profile = lazy(() => import("./screens/Profile"));


const App: React.FC = () => (
  <Router>
    <Suspense fallback={<div>Oops</div>} >
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
      <Route path="/home">
          <Home />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </Suspense>
  </Router>
)

export default App;
