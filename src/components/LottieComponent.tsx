import { useRef, useState } from 'react';
import Lottie from 'lottie-react';
import animationData from '../assets/animate/Lottie Lego.json';

function LottieComponent() {
  const [isPlaying, setIsPlaying] = useState(false);
  const lottieRef = useRef();
  const [speed, setSpeed] = useState(1);
  const [direction, setDirection] = useState(1);

  const handlePlay = () => {
    lottieRef.current.play();
  };

  const handlePause = () => {
    lottieRef.current.pause();
  };

  const increaseSpeed = () => {
    setSpeed(speed + 0.5);
  };

  const reverseDirection = () => {
    setDirection(-direction);
  };

  const goToFrame = (frame) => {
    if (lottieRef.current) {
      lottieRef.current.goToAndStop(frame, true);
    }
  };

  return (
    <div>
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={isPlaying}
        lottieRef={lottieRef}
        speed={speed}
        direction={direction}
      />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={increaseSpeed}>Increase Speed</button>
      <button onClick={reverseDirection}>Reverse Direction</button>
      <button onClick={() => goToFrame(50)}>Go to Frame 50</button>
    </div>
  );
}

export default LottieComponent;
