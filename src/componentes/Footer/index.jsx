import styled from "styled-components";

import facebook from "./sociais/facebook.svg";
import instagram from "./sociais/instagram.svg";
import twitter from "./sociais/twitter.svg";

const StyledFooter = styled.footer`
  background-color: #04244f;
  color: #fff;
  margin-top: 20px;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
`;

const DivSociais = styled.div`
  display: flex;
  gap: 40px;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <DivSociais>
        <img src={facebook}></img>
        <img src={instagram}></img>
        <img src={twitter}></img>
      </DivSociais>
      <p>Desenvolvido por Alura.</p>
    </StyledFooter>
  );
}
