import styled from 'styled-components';

export const Button = styled.div`
  font-family: 'Schoolbell', cursive;
  font-size: 2rem;
  padding: 0 0.5rem;
  margin-bottom: 2rem;
  color: #ab0500;
  /* font-weight: bold; */
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  border: #ab0500;
  border-style: solid;

  border-radius: 15px;

  &.greyish {
    color: #2e0300;
    border: #2e0300;
    border-style: solid;
  }
`;
