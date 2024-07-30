import React, { useState } from 'react'
import Goal01 from './pages/goal/Goal01'
import Action1 from './pages/action/Action.jsx';
import Action2 from './pages/action/Action_2.jsx';
import Action3 from './pages/action/Action_3.jsx';
import Action4 from './pages/action/Action_4.jsx';
import Action5 from './pages/action/Action_5.jsx';
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  const [inputValue, setInputValue] = useState('');
  const [action2Values, setAction2Values] = useState([]);
  const [action3Values, setAction3Values] = useState([]);
  const [action4Values, setAction4Values] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/action1'
          element={<Action1 inputValue={inputValue} setInputValue={setInputValue} />} />
        <Route path='/action2'
          element={<Action2 inputValue={inputValue} action2Values={action2Values} setAction2Values={setAction2Values} />} />
        <Route path="/action3"
          element={<Action3 inputValue={inputValue} action2Values={action2Values} action3Values={action3Values} setAction3Values={setAction3Values} />} />
        <Route path="/action4"
          element={<Action4 inputValue={inputValue} action2Values={action2Values} action3Values={action3Values} action4Values={action4Values} setAction4Values={setAction4Values} />}
        />
        <Route path="/action5"
          element={<Action5 inputValue={inputValue} action2Values={action2Values} action3Values={action3Values} action4Values={action4Values} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App