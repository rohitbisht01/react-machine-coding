import { useEffect } from "react";
import { useState } from "react";

const CountDownTimer = () => {
  const [countTime, setCountTime] = useState(20);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleResetTimer = () => setCountTime(0);

  const handleStartStop = () => {
    setIsPlaying(!isPlaying);
  };

  const getFormattedTime = () => {
    const minutes = Math.floor(countTime / (1000 * 60));
    const seconds = Math.floor((countTime % 60000) / 1000);
    return `${minutes ? minutes + ":" : ""} ${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  useEffect(() => {
    let interval;
    if (isPlaying && countTime > 0) {
      interval = setInterval(() => {
        setCountTime(countTime - 1000);
      }, 1000);
    } else if (!isPlaying || countTime === 0) {
      clearInterval(interval);
      // if (countTime === 0) alert("Timer over");
    }

    return () => clearInterval(interval);
  }, [isPlaying, countTime]);

  return (
    <div>
      <h3>Count Down Timer </h3>
      <input
        type="number"
        placeholder="Set duration (minutes or seconds)"
        value={countTime}
        onChange={(e) => setCountTime(e.target.value * 60000)}
      />
      <button onClick={handleStartStop}>{isPlaying ? "Pause" : "Start"}</button>
      <button onClick={handleResetTimer}>Reset</button>
      <div>{isPlaying ? "Is Playing" : "Not Playing"}</div>
      <p>{getFormattedTime()}</p>
    </div>
  );
};

export default CountDownTimer;
