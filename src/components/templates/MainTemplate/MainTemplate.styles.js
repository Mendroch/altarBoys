import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: calc(100vh - env(safe-area-inset-top) - env(safe-area-inset-bottom));
`;
