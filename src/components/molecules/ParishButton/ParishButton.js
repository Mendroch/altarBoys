import { Wrapper } from './ParishButton.styles';
import useModal from 'components/organisms/Modal/useModal';
import Modal from 'components/organisms/Modal/Modal';
import ParishModal from 'components/organisms/ParishModal/ParishModal';
import { ReactComponent as ChurchIcon } from 'assets/icons/church.svg';

const ParishButton = () => {
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      <Wrapper onClick={handleOpenModal}>
        <ChurchIcon />
      </Wrapper>
      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        <ParishModal handleClose={handleCloseModal} />
      </Modal>
    </>
  );
};

export default ParishButton;
