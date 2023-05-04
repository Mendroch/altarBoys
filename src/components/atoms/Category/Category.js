import styled from 'styled-components';

export const Category = styled.div`
  padding-left: 17px;
  display: flex;
  align-items: center;
  min-height: 37px;
  border-radius: 8px 8px 0 0;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: 'FiraSansMedium';
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blueLagoon};
  overflow: auto;
  white-space: nowrap;
`;