//react
import React, { useState, FC, useEffect, useCallback } from 'react';

//styled-components
import { AppleImage } from './styles';

//img
import OriginalApple from '../assets/original.svg';
import AppleBiteOne from '../assets/bite1.svg';
import AppleBiteTwo from '../assets/bite2.svg';

interface Props {
  biteApple: boolean;
}

const AppleImageContainer: FC<Props> = ({ biteApple }) => {
  const [imageID, setImageID] = useState<number>(0);
  const appleImages = [
    { src: OriginalApple, alt: 'originalApple', showImage: imageID === 0 },
    { src: AppleBiteOne, alt: 'AppleBiteOne', showImage: imageID === 1 },
    { src: AppleBiteTwo, alt: 'AppleBiteTwo', showImage: imageID === 2 },
  ];
  useEffect(() => {
    let count: number = 0;
    const biteInterval = setInterval(() => {
      setImageID((imageID) => (imageID + 1) % 3);
      count++;

      if (count === 3) {
        clearInterval(biteInterval);
      }
    }, 300);
  }, [biteApple]);

  return (
    <>
      {appleImages.map((img, index) => {
        return (
          <AppleImage
            src={img.src}
            alt={img.alt}
            showImage={img.showImage}
            key={index}
          />
        );
      })}
    </>
  );
};

export default AppleImageContainer;
