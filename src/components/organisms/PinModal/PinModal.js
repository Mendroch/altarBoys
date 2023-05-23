import { useState, useContext } from 'react';
import { Wrapper, Text, Input } from './PinModal.styles';
import { setToLS } from 'utils/storage';
import { InitialContext } from 'providers/InitialProvider';

const PinModal = () => {
  const { setLogged } = useContext(InitialContext);
  const [value, setValue] = useState('');

  const checkPin = (event) => {
    setValue(event.target.value);
    if (process.env.REACT_APP_PIN === event.target.value) {
      setToLS('pin', '__correct-pin__');
      setLogged();
    }
  };

  return (
    <Wrapper>
      <Text>Podaj PIN</Text>
      <Input type="text" placeholder="PIN" onChange={checkPin} value={value} autoFocus />
    </Wrapper>
  );
};

export default PinModal;
