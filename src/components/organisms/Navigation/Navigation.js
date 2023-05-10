import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Group, BackButton, Icon } from './Navigation.styles';
import icon from 'assets/icons/arrowLeft.svg';

const Navigation = ({ type }) => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Group>
        <BackButton onClick={() => navigate(-1)}>
          <Icon src={icon} alt={'arrow icon'} />
        </BackButton>
        <p>{type}</p>
      </Group>
    </Wrapper>
  );
};

export default Navigation;
