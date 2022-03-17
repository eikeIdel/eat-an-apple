//React
import React, { useState, useEffect } from 'react';
//styled-components
import { Wrapper, HelpButton, AppleCount } from './styles';
//Components
import EatButton from '../EatButton';
import AppleImageContainer from '../AppleImage';
//Icons
import HelpIcon from '../HelpIcon';
import { stringify } from 'querystring';
import TimePeriodSelector from '../TimePeriodSelector';

const Main: React.FC = () => {
  const [appleCount, setAppleCount] = useState<number>(0);
  const [timePeriod, setTimePeriod] = useState<string>('week');
  const [timePeriodClicked, setTimePeriodClicked] = useState<boolean>(false);
  const [biteApple, setBiteApple] = useState<boolean>(false);
  const [helpClicked, setHelpClicked] = useState<boolean>(false);

  useEffect(() => {
    const prevAppleCount: string = localStorage.getItem('appleCount') ?? '0';
    setAppleCount(parseInt(prevAppleCount));
  }, []);

  const buttonHandler = (buttonLabel: String) => {
    switch (buttonLabel) {
      case 'oneMore':
        localStorage.setItem('appleCount', String(appleCount + 1));
        setAppleCount(appleCount + 1);
        break;
      case 'oneLess':
        localStorage.setItem('appleCount', String(appleCount - 1));
        appleCount !== 0 && setAppleCount(appleCount - 1);
        break;
      case 'resetAll':
        const confirmed = window.confirm(
          "Do you really want to erase ALL apples from your memory. They'll never come back!"
        );
        if (confirmed) {
          localStorage.setItem('appleCount', '0');
          setAppleCount(0);
        }
        break;
    }
  };

  return (
    <>
      {timePeriodClicked && (
        <TimePeriodSelector setTimePeriod={setTimePeriod} />
      )}
      <Wrapper>
        <HelpButton>
          <HelpIcon />
        </HelpButton>

        <AppleCount>
          Last <em onClick={() => setTimePeriodClicked(true)}> {timePeriod}</em>{' '}
          you ate
          <br />
          {appleCount} apples
        </AppleCount>

        <AppleImageContainer biteApple={biteApple} />

        <EatButton
          setBiteApple={setBiteApple}
          className='more'
          buttonLabel='oneMore'
          buttonHandler={buttonHandler}
          greyOverlay={timePeriodClicked || helpClicked ? true : false}
        >
          Eat One More
        </EatButton>

        <EatButton
          className='less'
          buttonLabel='oneLess'
          buttonHandler={buttonHandler}
          greyOverlay={timePeriodClicked || helpClicked ? true : false}
        >
          Eat One Less
        </EatButton>

        <EatButton
          className='reset'
          buttonLabel='resetAll'
          buttonHandler={buttonHandler}
          greyOverlay={timePeriodClicked || helpClicked ? true : false}
        >
          Reset All
        </EatButton>
      </Wrapper>
    </>
  );
};

export default Main;
