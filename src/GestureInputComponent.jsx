import React, { useEffect, useState } from 'react';

function GestureInputComponent({ onGestureCaptured }) {
  const [gesture, setGesture] = useState('');

  useEffect(() => {
    // Mock function to simulate capturing a gesture.
    // In a real app, you'd use the UltraLeap SDK here.
    const captureGesture = () => {
      // Simulated gesture capture logic
      const simulatedGesture = 'Mock Gesture';
      setGesture(simulatedGesture);
      onGestureCaptured(simulatedGesture);
    };

    // Simulate capturing a gesture every 5 seconds
    const intervalId = setInterval(captureGesture, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [onGestureCaptured]);

  return <div>Current Gesture: {gesture}</div>;
}

export default GestureInputComponent;