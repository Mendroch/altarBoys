import styled from 'styled-components';

export const Name = styled.p`
  margin: 0;
  position: absolute;
  top: 25px;
  left: 17px;
  font-family: 'FiraSansMedium';
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xl};
`;
