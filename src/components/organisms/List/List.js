import React, { useState, useContext } from 'react';
import { ContentWrapper } from 'components/atoms/ContentWrapper/ContentWrapper';
import ListItem from 'components/molecules/ListItem/ListItem';
import { ParishContext } from 'providers/ParishProvider';
import { Info } from 'components/atoms/Info/Info';

const List = ({ setId }) => {
  const { getContent } = useContext(ParishContext);
  const [content] = useState(getContent());

  return (
    <ContentWrapper isDefectiveView={true}>
      {content.length ? (
        content.map((elem) => <ListItem elem={elem} setId={setId} key={elem.id} />)
      ) : (
        <Info>Brak zbliżających się asyst</Info>
      )}
    </ContentWrapper>
  );
};

export default List;
