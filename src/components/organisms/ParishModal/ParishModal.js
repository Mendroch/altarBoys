import { useContext } from 'react';
import { ParishContext } from 'providers/ParishProvider';
import { Wrapper, Item } from './ParishModal.styles';

const ParishModal = ({ handleClose }) => {
  const { setParish } = useContext(ParishContext);

  const changeParish = (e) => {
    const id = e.target.id;
    if (id.length) {
      setParish(id);
      handleClose();
    }
  };

  return (
    <Wrapper onClick={changeParish}>
      <Item id="PiotrIPawel">Piotr i Paweł</Item>
      <Item id="Wislica">Wiślica</Item>
      <Item id="Szpitalik">Szpitalik</Item>
    </Wrapper>
  );
};

export default ParishModal;
