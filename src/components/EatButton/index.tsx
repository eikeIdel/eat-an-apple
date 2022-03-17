import React, { useState } from 'react';
import { Button } from './styles';
import { animated, useSpring } from 'react-spring';

interface Props {
  className?: string;
  buttonLabel: string;
  buttonHandler: (buttonLabel: string) => void;
  setBiteApple?: React.Dispatch<React.SetStateAction<boolean>>;
  greyOverlay: boolean;
}

const EatButton: React.FC<Props> = ({
  className,
  children,
  buttonHandler,
  buttonLabel,
  setBiteApple,
  greyOverlay,
}) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const { bounce } = useSpring({
    from: { bounce: 0 },
    bounce: clicked ? 1 : 0,
    config: { duration: 400 },
  });

  const rotations = {
    oneMore: 'rotate(-1deg)',
    oneLess: 'rotate(1.27deg)',
    resetAll: 'rotate(-2.09deg)',
  };

  const bounceStyle = {
    transform: rotations[buttonLabel as keyof typeof rotations],
    scale: bounce.to({
      range: [0, 0.25, 0.5, 0.75, 1],
      output: [1, 1.2, 1, 1.2, 1],
    }),
  };

  const handleClick = () => {
    setClicked(!clicked);
    // setBiteApple ? setBiteApple((bite) => !bite) : '';
    buttonHandler(buttonLabel);
  };

  return (
    <>
      <Button
        as={animated.div}
        style={bounceStyle}
        onClick={!greyOverlay ? () => handleClick() : undefined}
        className={greyOverlay ? 'greyish' : ''}
      >
        {children}
      </Button>
    </>
  );
};

export default EatButton;
