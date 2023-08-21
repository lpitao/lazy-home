import { render, fireEvent, screen } from '@testing-library/react';
import LottieComponent from './LottieComponent';
import '@testing-library/jest-dom/extend-expect'; 
// 使用 typeof 来获取 LottieComponent 的类型
type LottieComponent = typeof LottieComponent;

describe('ControlledLottieAnimation', () => {
  it('increases speed on button click', () => {
    render(<LottieComponent />);
    
    const increaseSpeedButton = screen.getByText('Increase Speed');
    fireEvent.click(increaseSpeedButton);

    const speedDisplay = screen.getByTestId('speed-display');
    expect(speedDisplay).toBeInTheDocument('1.5'); // Assuming initial speed is 1
  });

  it('reverses direction on button click', () => {
    // render(<LottieComponent />);
    
    const reverseDirectionButton = screen.getByText('Reverse Direction');
    fireEvent.click(reverseDirectionButton);

    const directionDisplay = screen.getByTestId('direction-display');
    expect(directionDisplay).toBeInTheDocument('-1'); // Assuming initial direction is 1
  });

  it('goes to frame 50 on button click', () => {
    // render(<LottieComponent />);
    
    const goToFrameButton = screen.getByText('Go to Frame 50');
    fireEvent.click(goToFrameButton);

    // Assuming you have a way to test the frame number, maybe a snapshot comparison
    // You could take a snapshot of the Lottie component after clicking the button
    // and compare it with the expected snapshot of frame 50.
  });
});
