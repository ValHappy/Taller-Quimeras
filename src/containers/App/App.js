import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Home from '../Home/Home';
import Create from '../Create/Create';
import Garage from '../Garage/Garage';

function App() {

  return (
    <Router>
      <Navbar />

      <Route path="/" exact component={Home} />
      <Route path="/create" component={Create} />
      <Route path="/garage" component={Garage} />

    </Router>
  );
}

export default App;
