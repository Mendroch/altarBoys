import React, { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper, StyledImage, HeaderContainer, LinksContainer, Loading } from './Home.styles';
import useModal from 'components/organisms/Modal/useModal';
import Modal from 'components/organisms/Modal/Modal';
import { ReactComponent as LoadIcon } from 'assets/icons/load.svg';
import { ContentContext } from 'providers/ContentProvider';
import { getAnimationProps } from 'helpers/getAnimationProps';
import ParishButton from 'components/molecules/ParishButton/ParishButton';
import ParishName from 'components/molecules/ParishName/ParishName';

const Home = () => {
  const { content, transmisionUrl, whetherOpenLoading, setType } = useContext(ContentContext);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { initial, animate, trasition, exit } = getAnimationProps();

  useEffect(() => {
    whetherOpenLoading() ? handleOpenModal() : handleCloseModal();
    // eslint-disable-next-line
  }, [content]);

  return (
    <Wrapper initial={initial} animate={animate} transition={trasition} exit={exit}>
      <ParishName />
      <ParishButton />
      <HeaderContainer>
        <StyledImage />
        <h1>MINISTRANCI</h1>
      </HeaderContainer>
      <LinksContainer>
        {transmisionUrl ? (
          <a href={transmisionUrl} target="_blank" rel="noopener noreferrer">
            TRANSMISJA ONLINE
          </a>
        ) : null}
        <NavLink to="/categories" onClick={() => setType('songs')}>
          PIEŚNI
        </NavLink>
        <NavLink to="/text" onClick={() => setType('announcements')}>
          OGŁOSZENIA
        </NavLink>
      </LinksContainer>
      <Modal isOpen={isOpen}>
        <Loading>
          <LoadIcon />
        </Loading>
      </Modal>
    </Wrapper>
  );
};

export default Home;
