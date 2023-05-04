import { useContext } from 'react';
import { ParishContext } from 'providers/ParishProvider';
import { Item, ModalWrapper, Wrapper } from './ParishButton.styles';
import useModal from 'components/organisms/Modal/useModal';
import Modal from 'components/organisms/Modal/Modal';
import { ReactComponent as ChurchIcon } from 'assets/icons/church.svg';

const ParishButton = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();
  const { setParish } = useContext(ParishContext);

  const changeParish = (e) => {
    const id = e.target.id;
    if (id.length) {
      setParish(id);
      handleCloseModal();
    }
  };

  return (
    <>
      <Wrapper onClick={handleOpenModal}>
        <ChurchIcon />
      </Wrapper>
      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        <ModalWrapper onClick={changeParish}>
          <Item id="PiotrIPawel">Piotr i Paweł</Item>
          <Item id="Wislica">Wiślica</Item>
          <Item id="Szpitalik">Szpitalik</Item>
        </ModalWrapper>
      </Modal>
    </>
  );
};

export default ParishButton;
