import React, { useState, useEffect, useReducer } from 'react';
import { getFromLS, setToLS } from 'utils/storage';
import { getLatestVideoUrl } from 'helpers/getTransmissionUrl';
import { getData } from 'helpers/getData';

export const ContentContext = React.createContext({
  content: {},
  fontSize: '',
  transmisionUrl: '',
  contentType: '',
  whetherOpenLoading: () => {},
  updateFontSize: () => {},
  setContentType: () => {},
});

const queries = {
  announcements: 'https://ministranci.parafiaskoczow.ox.pl/api/announcements',
  assistPiotrIPawel: 'https://ministranci.parafiaskoczow.ox.pl/api/assistspiotrpawels',
  assistWislica: 'https://ministranci.parafiaskoczow.ox.pl/api/assistswislicas',
  assistSzpitalik: 'https://ministranci.parafiaskoczow.ox.pl/api/assistsszpitaliks',
};

const reducer = (state, action) => {
  return {
    ...state,
    [action.field]: action.value,
  };
};

const ContentProvider = ({ children }) => {
  const [content, dispatch] = useReducer(reducer, getFromLS('content'));
  const [fontSize, setFontSize] = useState(getFromLS('textSize'));
  const [transmisionUrl, setTransmisionUrl] = useState();
  const [contentType, setContentType] = useState();
  const [error, setError] = useState('');

  useEffect(() => {
    getData(queries, dispatch, setError);
    let urlFromLS = getFromLS('transmissionUrl');
    if (urlFromLS.length) setTransmisionUrl(urlFromLS);
    getLatestVideoUrl()
      .then((url) => {
        setTransmisionUrl(url);
        setToLS('transmissionUrl', url);
      })
      .catch((error) => setError(error));
  }, []);

  useEffect(() => {
    setToLS('content', content);
  }, [content]);

  const whetherOpenLoading = () => {
    return Object.keys(content).length < Object.keys(queries).length;
  };

  const updateFontSize = (size) => {
    setFontSize(size);
    setToLS('textSize', size);
  };

  return (
    <ContentContext.Provider
      value={{
        content,
        fontSize,
        transmisionUrl,
        contentType,
        whetherOpenLoading,
        updateFontSize,
        setContentType,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;
