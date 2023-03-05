
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/home';
import SubjectPage from './components/subjectPage';



const App = () => {
  return (
    <Router>
      <div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/subjects/:subject" component={SubjectPage} />

        </Switch>
      </div>
    </Router>
  )
};
export default App;
