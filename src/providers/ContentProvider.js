import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import { getFromLS, setToLS } from 'utils/storage';
import { getLatestVideoUrl } from 'helpers/getTransmissionUrl';

export const ContentContext = React.createContext({
  content: {},
  fontSize: '',
  transmisionUrl: '',
  whetherOpenLoading: () => {},
  setTextId: () => {},
  updateFontSize: () => {},
});

const queries = {
  announcements: 'https://ministranci.parafiaskoczow.ox.pl/api/announcements',
  announcementsUpdate: 'https://ministranci.parafiaskoczow.ox.pl/api/announcements/last-update',
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
  return data[0] ? data.sort((a, b) => a.name.localeCompare(b.name)) : data;
};

const ContentProvider = ({ children }) => {
  const [content, dispatch] = useReducer(reducer, getFromLS('content'));
  const [textId, setTextId] = useState('');
  const [fontSize, setFontSize] = useState(getFromLS('textSize'));
  const [transmisionUrl, setTransmisionUrl] = useState();
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

  const updateFontSize = (size) => {
    setFontSize(size);
    setToLS('textSize', size);
  };

  useEffect(() => {
    for (const query in queries) {
      axios
        .get(queries[query])
        .then(({ data }) => {
          dispatch({
            field: query,
            value: data,
            // value: sortData(data),
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

  return (
    <ContentContext.Provider
      value={{
        content,
        fontSize,
        transmisionUrl,
        whetherOpenLoading,
        setTextId,
        updateFontSize,
      }}
    >
      {children}
    </ContentContext.Provider>
  );
};

export default ContentProvider;
