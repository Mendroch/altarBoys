import { useContext } from 'react';
import { ParishContext } from 'providers/ParishProvider';
import { InitialContext } from 'providers/InitialProvider';
import { Wrapper, Item } from './ParishModal.styles';

const ParishModal = ({ handleClose }) => {
  const { setParish } = useContext(ParishContext);
  const { setIsParish } = useContext(InitialContext);

  const changeParish = (e) => {
    const id = e.target.id;
    if (id.length) {
      setParish(id);
      setIsParish();
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
