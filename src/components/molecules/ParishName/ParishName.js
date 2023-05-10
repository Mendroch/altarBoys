import { useState, useEffect, useContext } from 'react';
import { ParishContext } from 'providers/ParishProvider';
import { Name } from './ParishName.styles';
import useModal from 'components/organisms/Modal/useModal';
import Modal from 'components/organisms/Modal/Modal';
import ParishModal from 'components/organisms/ParishModal/ParishModal';

const getName = (parish) => {
  switch (parish) {
    case 'PiotrIPawel':
      return 'Piotr i Paweł';
    case 'Wislica':
      return 'Wiślica';
    case 'Szpitalik':
      return 'Szpitalik';
    default:
      return '';
  }
};

const ParishName = () => {
  const { parish } = useContext(ParishContext);
  const [parishName, setParishName] = useState(getName(parish));
  const { isOpen, handleOpenModal, handleCloseModal } = useModal();

  useEffect(() => setParishName(getName(parish)), [parish]);

  return (
    <>
      <Name onClick={handleOpenModal}>{parishName}</Name>
      <Modal isOpen={isOpen} handleClose={handleCloseModal}>
        <ParishModal handleClose={handleCloseModal} />
      </Modal>
    </>
  );
};

export default ParishName;
