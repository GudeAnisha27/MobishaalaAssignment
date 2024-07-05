import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import { FaRegNewspaper, FaHeartbeat, FaGlobe, FaMicrochip, FaMusic, FaMoon, FaArrowRight } from 'react-icons/fa';
import OpenAI from 'openai';

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true  // Replace with your actual API key
});

async function fetchResponse(userInput, chatHistory) {
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        ...chatHistory,
        { role: 'user', content: userInput }
      ],
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error:', error);
    return 'Sorry, something went wrong.';
  }
}

function App() {
  const [response, setResponse] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [relatedQuestions, setRelatedQuestions] = useState([
    'What were the primary objectives of Starship\'s third test flight?',
    'How did the third test flight of Starship compare to its previous two flights in terms of performance and milestones?',
    'What are the implications of Starship\'s third test flight on the future of reusable spacecraft and commercial space travel?'
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSearch = async (question) => {
    const newMessage = { role: 'user', content: question };
    const updatedHistory = [...chatHistory, newMessage];
    setChatHistory(updatedHistory);

    const result = await fetchResponse(question, updatedHistory);
    setResponse(result);
  };

  const handleNewChat = () => {
    setResponse('');
    setChatHistory([]);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      await handleSearch(inputValue);
      setInputValue('');  // Clear the input field after search
    }
  };

  return (
    <div className="App">
      <Navbar />
      <main>
        <h1>Discover New Horizons</h1>
        {response ? (
          <div className="response-container">
            <div className="response-header">
              <h2>Answer</h2>
            </div>
            <div className="response-content">
              <p>{response}</p>
              <hr/>
            </div>
            <div className="related-questions">
              <h3>Related</h3>
              <ul>
                {relatedQuestions.map((question, index) => (
                  <li key={index}>{question}</li>
                ))}
              </ul>
            </div>
            <div className="follow-up">
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Ask a follow-up question..."
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <button type="submit"><FaArrowRight /></button>
              </form>
              <button className="new-chat-button" onClick={handleNewChat}>+ New chat</button>
            </div>
          </div>
        ) : (
          <>
          <SearchBar onSearch={handleSearch} />

          <div className="categories">
            <Category name="Breaking News" icon={<FaRegNewspaper />} />
            <Category name="Health" icon={<FaHeartbeat />} />
            <Category name="Finance" icon={<FaGlobe />} />
            <Category name="Technology" icon={<FaMicrochip />} />
            <Category name="Entertainment" icon={<FaMusic />} />
            <Category name="Lifestyle" icon={<FaMoon />} />
          </div>
          </>
        )}
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
