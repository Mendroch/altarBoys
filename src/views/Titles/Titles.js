import React, { useContext } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import Navigation from 'components/organisms/Navigation/Navigation';
import List from 'components/organisms/List/List';
import { ParishContext } from 'providers/ParishProvider';
import { getAnimationProps } from 'helpers/getAnimationProps';

const Titles = () => {
  const { setTextId } = useContext(ParishContext);
  const { initial, animate, trasition, exit } = getAnimationProps();

  return (
    <ViewWrapper initial={initial} animate={animate} transition={trasition} exit={exit}>
      <Navigation type={'Asysty'} />
      <List setId={setTextId} />
    </ViewWrapper>
  );
};

export default Titles;
