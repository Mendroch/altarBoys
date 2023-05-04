import React, { useState, useEffect, useContext } from 'react';
import { ContentContext } from './ContentProvider';
import { getFromLS, setToLS } from 'utils/storage';
import { replaceLetters } from 'utils/replaceLetters';

export const ParishContext = React.createContext({
  setParish: () => {},
});

const ParishProvider = ({ children }) => {
  const parishLS = getFromLS('parish');
  const [parish, setParish] = useState(parishLS.length ? parishLS : 'PiotrIPawel');
  const [parishContent, setParishContent] = useState({});
  const { content } = useContext(ContentContext);

  const setContent = () => {
    setParishContent({
      announcements: content.announcements.find(
        (elem) => replaceLetters(elem.title) === parish.toLowerCase()
      ),
      assists: content[`assist${parish}`],
    });
  };

  useEffect(() => {
    setContent();
    setToLS('parish', parish);
  }, [parish]);

  return (
    <ParishContext.Provider
      value={{
        setParish,
      }}
    >
      {children}
    </ParishContext.Provider>
  );
};

export default ParishProvider;
