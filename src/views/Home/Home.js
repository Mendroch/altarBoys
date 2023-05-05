import React, { useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Wrapper, StyledImage, HeaderContainer, LinksContainer, Loading } from './Home.styles';
import useModal from 'components/organisms/Modal/useModal';
import Modal from 'components/organisms/Modal/Modal';
import { ReactComponent as LoadIcon } from 'assets/icons/load.svg';
import { ContentContext } from 'providers/ContentProvider';
import { getAnimationProps } from 'helpers/getAnimationProps';
import ParishButton from 'components/molecules/ParishButton/ParishButton';
import ParishName from 'components/molecules/ParishName/ParishName';
import ParishModal from 'components/organisms/ParishModal/ParishModal';
import { getFromLS } from 'utils/storage';

const Home = () => {
  const { content, transmisionUrl, whetherOpenLoading, setContentType } =
    useContext(ContentContext);
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { initial, animate, trasition, exit } = getAnimationProps();
  const [openParishModal, setOpenParishModal] = useState(false);
  const [firstOpening, setFirstOpening] = useState(false);

  useEffect(() => {
    whetherOpenLoading()
      ? handleOpenModal()
      : firstOpening
      ? setOpenParishModal(true)
      : handleCloseModal();
    // eslint-disable-next-line
  }, [content]);

  useEffect(() => {
    setFirstOpening(!getFromLS('parish').length);
  }, []);

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
        {openParishModal ? (
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
