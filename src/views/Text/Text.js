import React, { useState, useContext } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Category } from 'components/atoms/Category/Category';
import { ContentContext } from 'providers/ContentProvider';
import { ParishContext } from 'providers/ParishProvider';
import { Wrapper } from './Text.styles';
import { usePinching } from 'hooks/usePinching';
import { getAnimationProps } from 'helpers/getAnimationProps';
import { fixDate } from 'utils/fixDate';
import { Info } from 'components/atoms/Info/Info';

const createContent = (content) => {
  return { __html: content };
};

const Text = () => {
  const { contentType, fontSize } = useContext(ContentContext);
  const { getContent } = useContext(ParishContext);
  const [content] = useState(getContent());
  const [isDefectiveView] = useState(contentType === 'announcements');
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
      <Navigation type={contentType === 'announcements' ? 'Ogłoszenia' : 'Asysty'} />
      {!isDefectiveView ? (
        <Category>{`${content.title} - ${fixDate(content.date)}`}</Category>
      ) : null}
      <Wrapper isDefectiveView={isDefectiveView} fontSize={fontSize}>
        {!content && contentType === 'announcements' ? (
          <Info>Brak ogłoszeń</Info>
        ) : (
          <p dangerouslySetInnerHTML={createContent(isDefectiveView ? content : content.content)} />
        )}
      </Wrapper>
    </ViewWrapper>
  );
};

export default Text;
