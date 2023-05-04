export const setToLS = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getFromLS = (key) => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : {};
};
