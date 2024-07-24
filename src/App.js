import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Goal01 from '../src/pages/goal/Goal01';
import Goal02 from '../src/pages/goal/Goal02';
import Goal03 from '../src/pages/goal/Goal03';
import { useState } from 'react';

function App() {
  const [goalText, setGoalText] = useState('');

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Goal01 setGoalText={setGoalText} />} />
        <Route path="/goal02" element={<Goal02 goalText={goalText} />} />
        <Route path="/goal03" element={<Goal03 />} />
      </Routes>
    </Router>
  );
}

export default App;
