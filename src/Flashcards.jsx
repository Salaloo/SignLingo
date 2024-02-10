import React, { useState } from 'react';

const flashcardsData = [
  {
    id: 1,
    word: 'Hello',
    imageUrl: '/path/to/hello/image',
  },
  {
    id: 2,
    word: 'Thank You',
    imageUrl: '/path/to/thankyou/image',
  },
  // Add more flashcards here
];

function FlashcardComponent() {
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);

  const handleNext = () => {
    setCurrentFlashcardIndex((prevIndex) =>
      prevIndex + 1 < flashcardsData.length ? prevIndex + 1 : 0
    );
  };

  const handlePrev = () => {
    setCurrentFlashcardIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : flashcardsData.length - 1
    );
  };

  const { word, imageUrl } = flashcardsData[currentFlashcardIndex];

  return (
    <div>
      <h2>{word}</h2>
      <img src={imageUrl} alt={word} />
      <div>
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default FlashcardComponent;