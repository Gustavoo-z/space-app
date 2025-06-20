import styled from "styled-components";
import search from "./search.png";

const StyledDiv = styled.div`
  position: relative;
  display: inline-block;
`;

const StyledInput = styled.input`
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #c98cf1;
  background: transparent;
  box-sizing: border-box;
  width: 566px;
  color: #d9d9d9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  &::placeholder {
    color: #d9d9d9;
  }
`;

const ImgSearch = styled.img`
  position: absolute;
  top: 8px;
  right: 10px;
  width: 38px;
  height: 38px;
`;

export default function TextField() {
  return (
    <StyledDiv>
      <StyledInput placeholder="O que você procura?" />
      <ImgSearch src={search} alt="Ícone de pesquisa" />
    </StyledDiv>
  );
}
