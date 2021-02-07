import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
      <main className="mainWrap">
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/" component={HomeScreen} exact />
      </main>
      <footer className="footerWrap">
        <p>Copyright &copy; 2021 All right resevered! Developed by <a target="_blank" rel="noreferrer" href="https://promehedi.com/">Mehedi Hasan</a></p>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
