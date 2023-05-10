import styled from 'styled-components';

export const Name = styled.button`
  margin: 0;
  position: absolute;
  top: 25px;
  left: 17px;
  background: rgba(0, 0, 0, 0);
  border: none;
  font-family: 'FiraSansMedium';
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
