import React, { useState } from 'react';
import './index.css';
import { FaArrowRight } from 'react-icons/fa';

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(inputValue);
    setInputValue('');  // Clear the input field after search
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ask a question..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button type="submit"><FaArrowRight /></button>
    </form>
  );
}

export default SearchBar;
