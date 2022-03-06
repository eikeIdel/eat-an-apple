import styled from 'styled-components';

interface Props {
  showImage: boolean;
}

export const AppleImage = styled.img<Props>`
  width: 75%;
  margin-bottom: 1rem;
  display: ${(props) => (props.showImage ? 'block' : 'none')};
`;
