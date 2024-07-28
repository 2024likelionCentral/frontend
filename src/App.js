import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Login from './pages/login/Login';
import Enter from './pages/enter/Enter';
import Signin from './pages/signin/Signin';
import Mypage from './pages/mypage/Mypage';
import Modify from './pages/modify/Modify';
import CircumstancePage from './pages/circumstance_page/CircumstancePage';

function App() {
  return (
     <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/enter" element={<Enter />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/main" element={<Main />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/modify" element={<Modify />} />
          <Route path='/circumstancePage' element={<CircumstancePage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App