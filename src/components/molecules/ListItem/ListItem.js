import React from 'react';
import { Wrapper } from './ListItem.styles';

const ListItem = ({ elem, address, setId }) => {
  return (
    <Wrapper to={address} onClick={() => setId(elem.id)}>
      {elem.name}
    </Wrapper>
  );
};

export default ListItem;
