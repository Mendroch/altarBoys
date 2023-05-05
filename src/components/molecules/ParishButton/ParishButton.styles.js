import styled from 'styled-components';

export const Wrapper = styled.button`
  position: absolute;
  top: 17px;
  right: 17px;
  width: 45px;
  height: 45px;
  background: rgba(0, 0, 0, 0);
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.white};
`;
