
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<div className="container" style={{paddingTop: '2rem'}}><h2>Produtos (Em breve)</h2></div>} />
          <Route path="/booking" element={<div className="container" style={{paddingTop: '2rem'}}><h2>Agendamento (Em breve)</h2></div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
