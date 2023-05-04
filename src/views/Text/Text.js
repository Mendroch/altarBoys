import React, { useState, useContext } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Category } from 'components/atoms/Category/Category';
import { ContentContext } from 'providers/ContentProvider';
import { Wrapper, TextTitle } from './Text.styles';
import { usePinching } from 'hooks/usePinching';
import { getAnimationProps } from 'helpers/getAnimationProps';

const createContent = (content) => {
  return { __html: content };
};

const checkLocation = (type) => {
  return type === 'Ogłoszenia' || type === 'Intencje mszy';
};

const Text = () => {
  const { getCategory, getType, getContent, fontSize } = useContext(ContentContext);
  const [content] = useState(getContent());
  const [isDefectiveView] = useState(checkLocation(getType()));
  const { pinchingStart, pinchingMove, pinchingEnd } = usePinching();
  const { initial, animate, trasition, exit } = getAnimationProps();

  return (
    <ViewWrapper
      initial={initial}
      animate={animate}
      transition={trasition}
      exit={exit}
      onTouchStart={(e) => pinchingStart(e)}
      onTouchMove={(e) => pinchingMove(e)}
      onTouchEnd={(e) => pinchingEnd(e)}
    >
      <Navigation type={getType()} />
      {!isDefectiveView ? <Category>{getCategory(content.category_id)}</Category> : null}
      <Wrapper isDefectiveView={isDefectiveView} fontSize={fontSize}>
        {isDefectiveView ? null : content.name !== getCategory(content.category_id) ? (
          <TextTitle>{content.name}</TextTitle>
        ) : null}
        <p dangerouslySetInnerHTML={createContent(content.content)} />
      </Wrapper>
    </ViewWrapper>
  );
};

export default Text;
