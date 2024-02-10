import { useState } from 'react';
import logo from '/SignLingo.png';
import './App.css';

function App() {
  const [activeDropdown, setActiveDropdown] = useState('');

  // Sample data structure for flashcard videos by category
  const flashcardsData = {
    ABCs: [{ title: 'Letter A', videoUrl: '/videos/letter-a.mp4' }],
    BasicVocab: [{ title: 'Hello', videoUrl: '/videos/hello.mp4' }],
    Colors: [{ title: 'Red', videoUrl: '/videos/red.mp4' }],
    Travel: [{ title: 'Airport', videoUrl: '/videos/airport.mp4' }],
    Cooking: [{ title: 'Cook', videoUrl: '/videos/cook.mp4' }],
    Sports: [{ title: 'Soccer', videoUrl: '/videos/soccer.mp4' }],
    CS: [{ title: 'Hacker', videoUrl: '/videos/CS.mp4' }],
  };

  const toggleDropdown = (category) => {
    setActiveDropdown(activeDropdown === category ? '' : category);
  };

  return (
    <>
      <img src={logo} className="logo" alt="SignLingo Logo" />
      <h1>Flash Cards</h1>
      <div className="buttons-container"> {/* This div wraps all your buttons */}
        {Object.keys(flashcardsData).map((category) => (
          <button key={category} className="ABCs" onClick={() => toggleDropdown(category)}>
            {category}
          </button>
        ))}
      </div>
      {/* Render the active dropdown's content outside and below the buttons container */}
      {activeDropdown && (
        <ul>
          {flashcardsData[activeDropdown].map((flashcard, index) => (
            <li key={index}>
              <h3>{flashcard.title}</h3>
              <video width="320" height="240" controls>
                <source src={flashcard.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default App;