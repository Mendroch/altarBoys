import React, { useContext } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Category } from 'components/atoms/Category/Category';
import List from 'components/organisms/List/List';
import { ContentContext } from 'providers/ContentProvider';
import { getAnimationProps } from 'helpers/getAnimationProps';

const Categories = () => {
  const { setCategoryId, getType } = useContext(ContentContext);
  const { initial, animate, trasition, exit } = getAnimationProps();

  return (
    <ViewWrapper initial={initial} animate={animate} transition={trasition} exit={exit}>
      <Navigation type={getType()} />
      <Category>Kategorie</Category>
      <List nextPage={'/titles'} setId={setCategoryId} />
    </ViewWrapper>
  );
};

export default Categories;
