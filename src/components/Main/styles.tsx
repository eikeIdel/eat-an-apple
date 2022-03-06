import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #dcf6d1;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;
`;

export const HelpButton = styled.div`
  margin-top: 0.8rem;
  margin-right: 1rem;
  margin-left: auto;
`;

export const AppleCount = styled.h1`
  text-align: center;
  text-transform: uppercase;
  color: #ab0500;
  font-family: 'Schoolbell', cursive;
  font-size: 2.5rem;
  line-height: 170%;

  em {
    font-family: 'Schoolbell', cursive;
    text-decoration: underline;
    font-style: normal;
  }
`;
