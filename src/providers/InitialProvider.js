import React, { useState, useEffect, useContext } from 'react';
import { ContentContext } from './ContentProvider';
import { getFromLS } from 'utils/storage';

export const InitialContext = React.createContext({
  firstOpening: {},
  setLogged: () => {},
  setIsParish: () => {},
});

const initialData = {
  logged: getFromLS('pin').length ? true : false,
  isParish: getFromLS('parish').length ? true : false,
  contendLoaded: false,
};

const InitialProvider = ({ children }) => {
  const { content, whetherOpenLoading } = useContext(ContentContext);
  const [firstOpening, setFirstOpening] = useState(initialData);

  useEffect(() => {
    if (!whetherOpenLoading()) setFirstOpening({ ...firstOpening, contendLoaded: true });
    // eslint-disable-next-line
  }, [content]);

  const setLogged = () => {
    setFirstOpening({ ...firstOpening, logged: true });
  };

  const setIsParish = () => {
    setFirstOpening({ ...firstOpening, isParish: true });
  };

  return (
    <InitialContext.Provider
      value={{
        firstOpening,
        setLogged,
        setIsParish,
      }}
    >
      {children}
    </InitialContext.Provider>
  );
};

export default InitialProvider;
