import React, { useState, useContext } from 'react';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import ListItem from 'components/molecules/ListItem/ListItem';
import { ParishContext } from 'providers/ParishProvider';

const List = ({ setId }) => {
  const { getContent } = useContext(ParishContext);
  const [content] = useState(getContent());

  return (
    <ContentWrapper isDefectiveView={true}>
      {content.map((elem) => (
        <ListItem elem={elem} setId={setId} key={elem.id} />
      ))}
    </ContentWrapper>
  );
};

export default List;
