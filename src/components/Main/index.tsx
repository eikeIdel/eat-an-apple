//React
import React, { useState } from 'react';
//styled-components
import { Wrapper, HelpButton, AppleCount } from './styles';
//Components
import EatButton from '../EatButton';
import AppleImageContainer from '../AppleImage';
//Icons
import HelpIcon from '../HelpIcon';

interface Main {
  buttonHandler: void;
}

const Main: React.FC = () => {
  const [appleCount, setAppleCount] = useState<number>(0);
  const [timePeriod, setTimerPeriod] = useState<string>('week');
  const [timePeriodClicked, setTimePeriodClicked] = useState<boolean>(false);
  const [biteApple, setBiteApple] = useState<boolean>(false);

  const resetAll = () => {
    let confirmed = window.confirm(
      'Do you really want to erase ALL apples from your memory. They will never come back!'
    );
    confirmed && setAppleCount(0);
  };

  const buttonHandler = (buttonLabel: String) => {
    switch (buttonLabel) {
      case 'oneMore':
        setAppleCount(appleCount + 1);
        break;
      case 'oneLess':
        appleCount !== 0 && setAppleCount(appleCount - 1);
        break;
      case 'resetAll':
        resetAll();
        break;
    }
  };

  return (
    <>
      <Wrapper>
        <HelpButton>
          <HelpIcon />
        </HelpButton>

        <AppleCount>
          Last <em> {timePeriod}</em> you ate
          <br />
          {appleCount} apples
        </AppleCount>

        <AppleImageContainer biteApple={biteApple} />

        <EatButton
          setBiteApple={setBiteApple}
          className='more'
          buttonLabel='oneMore'
          buttonHandler={buttonHandler}
        >
          Eat One More
        </EatButton>

        <EatButton
          className='less'
          buttonLabel='oneLess'
          buttonHandler={buttonHandler}
        >
          Eat One Less
        </EatButton>

        <EatButton
          className='reset'
          buttonLabel='resetAll'
          buttonHandler={buttonHandler}
        >
          Reset All
        </EatButton>
      </Wrapper>
    </>
  );
};

export default Main;
