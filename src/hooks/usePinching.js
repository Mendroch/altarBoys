import { useContext } from 'react';
import { getFromLS } from 'utils/storage';
import { ContentContext } from 'providers/ContentProvider';

export const usePinching = () => {
  const { updateFontSize } = useContext(ContentContext);
  let fontSizeStartGesture;
  let fontSizeInTouchEvent;
  let initialDistance;

  const pinchingStart = (e) => {
    if (e.touches.length === 2) {
      fontSizeStartGesture = getFromLS('textSize');
      initialDistance = Math.round(
        Math.sqrt(
          Math.pow(e.touches[0].pageX - e.touches[1].pageX, 2) +
            Math.pow(e.touches[0].pageY - e.touches[1].pageY, 2)
        )
      );
    }
  };

  const pinchingMove = (e) => {
    if (e.touches.length === 2) {
      let currentDistance = Math.round(
        Math.sqrt(
          Math.pow(e.touches[0].pageX - e.touches[1].pageX, 2) +
            Math.pow(e.touches[0].pageY - e.touches[1].pageY, 2)
        )
      );

      let fontsSize = [
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
      let newfontSize = Math.floor((currentDistance - initialDistance) / 30);
      let fontSize = fontsSize[fontsSize.indexOf(fontSizeStartGesture) + newfontSize];
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
