import React from 'react';
import { Wrapper } from './ListItem.styles';
import { fixDate } from 'utils/fixDate';

const ListItem = ({ elem, setId }) => {
  return (
    <Wrapper to={'/text'} onClick={() => setId(elem.id)}>
      {`${elem.title} - ${fixDate(elem.date)}`}
    </Wrapper>
  );
};

export default ListItem;
