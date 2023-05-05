import React, { useState, useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ContentContext } from './ContentProvider';
import { getFromLS, setToLS } from 'utils/storage';
import { replaceLetters } from 'utils/replaceLetters';

export const ParishContext = React.createContext({
  parish: '',
  parishContent: {},
  setParish: () => {},
  getContent: () => {},
  setTextId: () => {},
});

const ParishProvider = ({ children }) => {
  const parishLS = getFromLS('parish');
  const [parish, setParish] = useState(parishLS.length ? parishLS : 'PiotrIPawel');
  const [parishContent, setParishContent] = useState({});
  const [textId, setTextId] = useState('');
  const { content, contentType, whetherOpenLoading } = useContext(ContentContext);
  let location = useLocation();

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

  const getContent = () => {
    return contentType === 'announcements'
      ? parishContent.announcements.description
      : location.pathname === '/titles'
      ? parishContent.assists
      : parishContent.assists.find((elem) => elem.id === textId);
  };

  return (
    <ParishContext.Provider
      value={{
        parish,
        parishContent,
        setParish,
        getContent,
        setTextId,
      }}
    >
      {children}
    </ParishContext.Provider>
  );
};

export default ParishProvider;
