import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import { FaRegNewspaper, FaHeartbeat, FaGlobe, FaMicrochip, FaMusic, FaMoon } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <h1>Discover New Horizons</h1>
        <SearchBar />
        <div className="categories">
          <Category name="Breaking News" icon={<FaRegNewspaper />} />
          <Category name="Health" icon={<FaHeartbeat />} />
          <Category name="Finance" icon={<FaGlobe />} />
          <Category name="Technology" icon={<FaMicrochip />} />
          <Category name="Entertainment" icon={<FaMusic />} />
          <Category name="Lifestyle" icon={<FaMoon />} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Category({ name, icon }) {
  return (
    <div className="category">
      {icon}
      <h3>{name}</h3>
    </div>
  );
}

export default App;