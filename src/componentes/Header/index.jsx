import styled from "styled-components";
import TextField from "../TextField";

const StyledHeader = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;
  margin: 0 20px;
  img {
    max-width: 212px;
    &:hover {
      transform: scale(1.05);
      transition: transform 0.3s ease-in-out;
      cursor: pointer;
    }
  }
`;

export default function Header({ searchPhotos }) {
  return (
    <StyledHeader>
      <img src="/public/imagens/logo.png" alt="Logo Space-App" />
      <TextField searchPhotos={searchPhotos} />
    </StyledHeader>
  );
}
