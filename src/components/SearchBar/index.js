import React from 'react';
import './index.css';
import { FaArrowRight } from 'react-icons/fa';

function SearchBar() {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Ask a question..." />
      <button type="submit"><FaArrowRight /></button>
    </div>
  );
}

export default SearchBar;