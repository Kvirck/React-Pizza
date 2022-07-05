import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import NotFound from './Pages/NotFound';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/cart" element={<Cart />}/>
              <Route path="*" element={<NotFound />}/>
            </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
