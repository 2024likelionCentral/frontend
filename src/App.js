import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import Enter from './pages/enter/Enter';
import Signin from './pages/signin/Signin';

function App() {
  return (
     <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/enter" element={<Enter />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/main" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App