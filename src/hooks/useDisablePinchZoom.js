import { useEffect } from 'react';

export const useDisablePinchZoom = () => {
  useEffect(() => {
    const disablePinchZoom = (e) => {
      if (e.touches.length > 1 && e.cancelable) {
        e.preventDefault();
      }
    };
    document.addEventListener('touchmove', disablePinchZoom, { passive: false });
    document.addEventListener('scroll', disablePinchZoom, { passive: false });
    return () => {
      document.removeEventListener('touchmove', disablePinchZoom);
      document.removeEventListener('scroll', disablePinchZoom);
    };
  }, []);
};
