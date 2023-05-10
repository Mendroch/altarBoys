import styled from 'styled-components';

export const Category = styled.div`
  padding: 0 17px;
  display: flex;
  align-items: center;
  min-height: 37px;
  border-radius: 8px 8px 0 0;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-family: 'FiraSansMedium';
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blueLagoon};
  overflow: auto;
  white-space: nowrap;
`;
