import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 5px 17px;
  display: flex;
  flex-direction: column;
  width: 60vw;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
`;

export const Item = styled.button`
  height: 45px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.m};
  background: rgba(0, 0, 0, 0);
  border: none;

  &:not(:last-of-type) {
    border-bottom: 2px solid ${({ theme }) => theme.colors.lightGray};
  }
`;
