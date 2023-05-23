import React, { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper, StyledImage, HeaderContainer, LinksContainer, Loading } from './Home.styles';
import useModal from 'components/organisms/Modal/useModal';
import Modal from 'components/organisms/Modal/Modal';
import { ReactComponent as LoadIcon } from 'assets/icons/load.svg';
import { ContentContext } from 'providers/ContentProvider';
import { InitialContext } from 'providers/InitialProvider';
import { getAnimationProps } from 'helpers/getAnimationProps';
import ParishButton from 'components/molecules/ParishButton/ParishButton';
import ParishName from 'components/molecules/ParishName/ParishName';
import ParishModal from 'components/organisms/ParishModal/ParishModal';
import PinModal from 'components/organisms/PinModal/PinModal';

const Home = () => {
  const { transmisionUrl, setContentType } = useContext(ContentContext);
  const { firstOpening } = useContext(InitialContext);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { initial, animate, trasition, exit } = getAnimationProps();

  useEffect(() => {
    Object.values(firstOpening).includes(false) ? handleOpenModal() : handleCloseModal();
    // eslint-disable-next-line
  }, [firstOpening]);

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
        <NavLink to="/text" onClick={() => setContentType('announcements')}>
          OGŁOSZENIA
        </NavLink>
        <NavLink to="/titles" onClick={() => setContentType('assists')}>
          ASYSTY
        </NavLink>
      </LinksContainer>
      <Modal isOpen={isOpen}>
        {!firstOpening.logged ? (
          <PinModal />
        ) : !firstOpening.isParish ? (
          <ParishModal handleClose={handleCloseModal} />
        ) : (
          <Loading>
            <LoadIcon />
          </Loading>
        )}
      </Modal>
    </Wrapper>
  );
};

export default Home;
