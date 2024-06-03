import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './index.css';
import App from './App';
import * as imports from './imports.js';


const LandingPage = () => {
  const navigate = useNavigate();
  const [isDark, setisDark] = imports.useState(true);

  const logoImage = isDark ? imports.lightImage : imports.darkImage;

  return (
    <section className='hero' data-theme={isDark ? "dark" : "light"}>
      <imports.Toggle isChecked={isDark} handleChange={() => setisDark(!isDark)} />

      <div className='logo' >
        <img src={logoImage} alt="ToDos" id='logo' onClick={() => navigate('/app')}/>
      </div>

      <img src={imports.tickMark} alt="ToDos" className='tick' />

      <div className='App-Redirecting-btn-container'>
        <button className='App-Redirecting-btn button1' onClick={() => navigate('/app')}>
          <b>
            Check your ToDos
          </b>
        </button>
      </div>
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<App />} />
    </Routes>
  </Router>
);