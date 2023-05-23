import { useContext } from 'react';
import { getFromLS } from 'utils/storage';
import { ContentContext } from 'providers/ContentProvider';

export const usePinching = () => {
  const { updateFontSize } = useContext(ContentContext);
  let fontSizeStartGesture;
  let fontSizeInTouchEvent;
  let initialDistance;

  const fontsSize = [
    '12px',
    '13px',
    '14px',
    '15px',
    '16px',
    '17px',
    '18px',
    '19px',
    '20px',
    '21px',
    '22px',
    '23px',
    '24px',
    '25px',
  ];

  const offsetX = (e) => Math.pow(e.touches[0].pageX - e.touches[1].pageX, 2);
  const offsetY = (e) => Math.pow(e.touches[0].pageY - e.touches[1].pageY, 2);
  const getDistance = (e) => Math.round(Math.sqrt(offsetX(e) + offsetY(e)));

  const pinchingStart = (e) => {
    if (e.touches.length === 2) {
      fontSizeStartGesture = getFromLS('textSize');
      initialDistance = getDistance(e);
    }
  };

  const pinchingMove = (e) => {
    if (e.touches.length === 2) {
      const currentDistance = getDistance(e);
      const newfontSize = Math.floor((currentDistance - initialDistance) / 30);
      const fontSize = fontsSize[fontsSize.indexOf(fontSizeStartGesture) + newfontSize];
      if (fontSize !== undefined && fontSize !== fontSizeInTouchEvent) {
        fontSizeInTouchEvent = fontSize;
      }
    }
  };

  const pinchingEnd = (e) => {
    if (e.touches.length === 1) {
      if (fontSizeInTouchEvent) {
        updateFontSize(fontSizeInTouchEvent);
      }
    }
  };

  return {
    pinchingStart,
    pinchingMove,
    pinchingEnd,
  };
};
