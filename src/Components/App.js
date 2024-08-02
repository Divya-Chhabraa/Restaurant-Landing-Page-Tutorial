import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from "./Homepage";
import Login from './Login';
import Signup from './Signup';
import Feedback from './Feedback';
import Contact from './Contact';
import StartPage from './StartPage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/startpage" element={<StartPage />} />
        
        

      </Routes>
    </div>
  );
}

export default App;
