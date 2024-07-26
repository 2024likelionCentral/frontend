import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Goal01 from './pages/goal/Goal01';
import Goal02 from './pages/goal/Goal02';
import Goal03 from './pages/goal/Goal03';
import Goal04 from './pages/goal/Goal04';
import GoalMain from './pages/goal/GoalMain';
import Header from './components/goal/Header';

function App() {
  const [goalText, setGoalText] = useState('');

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Goal01 setGoalText={setGoalText} />} />
        <Route path="/goal02" element={<Goal02 goalText={goalText} />} />
        <Route path="/goal03" element={<Goal03 goalText={goalText} />} />
        <Route path="/goal04" element={<Goal04 />} />
        <Route path="/goalMain" element={<GoalMain />} />
      </Routes>
    </Router>
  );
}

export default App;
