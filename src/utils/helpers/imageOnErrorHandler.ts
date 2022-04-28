import React from 'react';
import defaultCarImage from '../../assets/carsDefaultImage.png';

export const imageOnErrorHandler = (event: React.SyntheticEvent<HTMLImageElement, Event>): void => {
  event.currentTarget.src = defaultCarImage;
};
