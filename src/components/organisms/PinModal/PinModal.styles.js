import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 17px;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 60vw;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
`;

export const Text = styled.p`
  margin: 0 0 10px 0;
`;

export const Input = styled.input`
  padding: 10px;
  max-width: 100%;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  outline: none;
`;
