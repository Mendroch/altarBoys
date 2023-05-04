import styled from 'styled-components';

export const ContentWrapper = styled.div`
  position: relative;
  padding: 5px 17px;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ isDefectiveView }) => (isDefectiveView ? '8px' : '0 0 8px 8px')};
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: ${({ theme }) => theme.colors.lightGray};
  }
`;
