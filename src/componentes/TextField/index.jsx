import styled from "styled-components";
import searchIcon from "./search.png";

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
  &:focus {
    outline: none;
    transform: scale(1.005);
  }
`;

const ImgSearch = styled.img`
  position: absolute;
  top: 8px;
  right: 10px;
  width: 38px;
  height: 38px;
`;

export default function TextField({ setSearchText }) {
  function aoDigitar(e) {
    setSearchText(e.target.value);
  }

  return (
    <StyledDiv>
      <StyledInput onChange={aoDigitar} placeholder="O que você procura?" />
      <ImgSearch src={searchIcon} alt="Ícone de pesquisa" />
    </StyledDiv>
  );
}
