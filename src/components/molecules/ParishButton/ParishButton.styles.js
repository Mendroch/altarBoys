import styled from 'styled-components';

export const Wrapper = styled.button`
  position: absolute;
  top: 17px;
  right: 17px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background: rgba(0, 0, 0, 0);
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.white};
`;

export const Icon = styled.img`
  margin-bottom: 4px;
  width: 32px;
  height: 32px;
`;
