import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Group, BackButton } from './Navigation.styles';
import { ReactComponent as BackIcon } from 'assets/icons/arrowLeft.svg';

const Navigation = ({ type }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Group>
        <BackButton onClick={() => navigate(-1)}>
          <BackIcon />
        </BackButton>
        <p>{type}</p>
      </Group>
    </Wrapper>
  );
};

export default Navigation;
