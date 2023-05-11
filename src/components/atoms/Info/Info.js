import styled from 'styled-components';

export const Info = styled.p`
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-align: center;
`;
