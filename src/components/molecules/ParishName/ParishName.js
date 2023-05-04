import { useState, useEffect, useContext } from 'react';
import { ParishContext } from 'providers/ParishProvider';
import { Name } from './ParishName.styles';

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

  useEffect(() => setParishName(getName(parish)), [parish]);

  return <Name>{parishName}</Name>;
};

export default ParishName;
