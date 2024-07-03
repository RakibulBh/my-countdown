import { useEffect, useState } from "react";

const useCountdown = (targetDate: Date) => {
  const countDownDate = new Date(targetDate).getTime();
  const [countDown, setCountDown] = useState(
    countDownDate - new Date().getTime()
  );

  useEffect(() => {
    const tickSound = new Audio("/clockTick.mp3"); // Load the tick sound
    tickSound.preload = "auto"; // Preload the audio file

    const interval = setInterval(() => {
      setCountDown(() => {
        tickSound.currentTime = 0; // Reset the audio playback to the beginning
        tickSound.play(); // Play the tick sound
        return countDownDate - new Date().getTime();
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown: any) => {
  // Calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};

export { useCountdown };
