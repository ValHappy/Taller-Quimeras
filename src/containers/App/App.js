import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Home from '../Home/Home';
import Create from '../Create/Create';
import Garage from '../Garage/Garage';
import AppContext from '../../contexts/AppContext';

import Ear1 from '../../assets/img/chimera/ears/ears_1.png';
import Ear2 from '../../assets/img/chimera/ears/ears_2.png';
import Ear3 from '../../assets/img/chimera/ears/ears_3.png';
import Ear4 from '../../assets/img/chimera/ears/ears_4.png';
import Ear5 from '../../assets/img/chimera/ears/ears_5.png';

import Head1 from '../../assets/img/chimera/head/head_1.png';
import Head2 from '../../assets/img/chimera/head/head_2.png';
import Head3 from '../../assets/img/chimera/head/head_3.png';
import Head4 from '../../assets/img/chimera/head/head_4.png';
import Head5 from '../../assets/img/chimera/head/head_5.png';

import Tail1 from '../../assets/img/chimera/tails/tail_1.png';
import Tail2 from '../../assets/img/chimera/tails/tail_2.png';
import Tail3 from '../../assets/img/chimera/tails/tail_3.png';
import Tail4 from '../../assets/img/chimera/tails/tail_4.png';
import Tail5 from '../../assets/img/chimera/tails/tail_5.png';

import Body1 from '../../assets/img/chimera/body.png';

function App() {

  const [bodyPart, setBodyPart] = useState('heads');
  const [selectedEar, setSelectedEar] = useState(Ear1);
  const [selectedHead, setSelectedHead] = useState(Head1);
  const [selectedBody, setSelectedBody] = useState(Body1);
  const [selectedTail, setSelectedTail] = useState(Tail1);

  const context = {
    bodyPart,
    setBodyPart,
    selectedEar,
    setSelectedEar,
    ears: [Ear1, Ear2, Ear3, Ear4, Ear5],
    selectedHead,
    setSelectedHead,
    heads: [Head1, Head2, Head3, Head4, Head5],
    selectedBody,
    setSelectedBody,
    bodies: [Body1],
    selectedTail,
    setSelectedTail,
    tails: [Tail1, Tail2, Tail3, Tail4, Tail5],


  };

  return (
    <AppContext.Provider value={context}>
      <Router>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/create" component={Create} />
        <Route path="/garage" component={Garage} />
      </Router>
    </AppContext.Provider>
  );
}

export default App;
