import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { getFromLS, setToLS } from 'utils/storage';
import { getLatestVideoUrl } from 'helpers/getTransmissionUrl';

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

const sortData = (data) => {
  return data.length > 1 && data[0].date
    ? data.sort((a, b) => {
        let date1 = new Date(a.date);
        let date2 = new Date(b.date);
        return date2 > date1 ? -1 : date1 > date2 ? 1 : 0;
      })
    : data;
};

const ContentProvider = ({ children }) => {
  const [content, dispatch] = useReducer(reducer, getFromLS('content'));
  const [fontSize, setFontSize] = useState(getFromLS('textSize'));
  const [transmisionUrl, setTransmisionUrl] = useState();
  const [contentType, setContentType] = useState();
  const [error, setError] = useState('');

  useEffect(() => {
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
    for (const query in queries) {
      axios
        .get(queries[query])
        .then(({ data }) => {
          dispatch({
            field: query,
            value: sortData(data),
          });
        })
        .catch(() => {
          setError(`Błąd połączenia z internetem`);
        });
    }
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
