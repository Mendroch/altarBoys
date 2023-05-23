import axios from 'axios';

const sortData = (data) => {
  return data.length > 1 && data[0].date
    ? data.sort((a, b) => {
        let date1 = new Date(a.date);
        let date2 = new Date(b.date);
        return date2 > date1 ? -1 : date1 > date2 ? 1 : 0;
      })
    : data;
};

export const getData = async (queries, dispatch, setError) => {
  const values = Object.values(queries);
  const keys = Object.keys(queries);
  const promises = values.map((link) => axios.get(link));

  try {
    const res = await Promise.all(promises);
    res.forEach((data, index) => {
      dispatch({
        field: keys[index],
        value: sortData(data.data),
      });
    });
  } catch {
    setError(`Błąd połączenia z internetem`);
  }
};
