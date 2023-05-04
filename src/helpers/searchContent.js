const searchContent = (value, content) => {
  return content
    .filter(
      (text) =>
        text.name.toLowerCase().includes(value.toLowerCase()) ||
        text.content.toLowerCase().includes(value.toLowerCase())
    )
    .sort((a, b) => {
      let itA = a.name.toLowerCase().includes(value.toLowerCase());
      let itB = b.name.toLowerCase().includes(value.toLowerCase());

      return itA && !itB ? -1 : !itB && itA ? 1 : 0;
    });
};

export default searchContent;
