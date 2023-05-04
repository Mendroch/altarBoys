import React, { useState, useEffect, useContext } from 'react';
import { ContentContext } from './ContentProvider';
import { getFromLS, setToLS } from 'utils/storage';
import { replaceLetters } from 'utils/replaceLetters';

export const ParishContext = React.createContext({
  parish: {},
  parishContent: {},
  setParish: () => {},
});

const ParishProvider = ({ children }) => {
  const parishLS = getFromLS('parish');
  const [parish, setParish] = useState(parishLS.length ? parishLS : 'PiotrIPawel');
  const [parishContent, setParishContent] = useState({});
  const { content, whetherOpenLoading } = useContext(ContentContext);

  const setContent = () => {
    setParishContent({
      announcements: content.announcements.find(
        (elem) => replaceLetters(elem.title) === parish.toLowerCase()
      ),
      assists: content[`assist${parish}`],
    });
  };

  useEffect(() => {
    if (!whetherOpenLoading()) {
      setContent();
      setToLS('parish', parish);
    }
    // eslint-disable-next-line
  }, [parish, content]);

  return (
    <ParishContext.Provider
      value={{
        parish,
        parishContent,
        setParish,
      }}
    >
      {children}
    </ParishContext.Provider>
  );
};

export default ParishProvider;
