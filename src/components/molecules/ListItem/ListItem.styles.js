import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 50px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.m};
  text-decoration: none;

  &:not(:last-of-type) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightGray};
  }
`;
