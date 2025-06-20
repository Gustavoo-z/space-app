import styled from "styled-components";
import IconButton from "../IconButton";

const Figure = styled.figure`
  width: ${(props) => (props.$expandida ? "90%" : "450px")};
  max-width: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
  figcaption {
    background-color: #001634;
    border-radius: 0px 0px 20px 20px;
    color: white;
    box-sizing: border-box;
    padding: 12px;
    h3 {
      font-family: "GandhiSansBold";
      font-size: 24px;
    }
    h4 {
      font-family: "GandhiSansRegular";
      font-weight: 400;
      font-size: 16px;
      flex-grow: 1;
    }
    h3,
    h4 {
      margin: 0;
      font-size: 16px;
    }
  }
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export default function ImageGallery({
  foto,
  expandida = false,
  aoZoomSolicitado,
  toggleImage,
}) {
  return (
    <Figure $expandida={expandida} id={`foto-${foto.id}`}>
      <img src={foto.path} alt={foto.alt} />
      <figcaption>
        <h3>{foto.titulo}</h3>
        <Footer>
          <h4>{foto.fonte}</h4>
          <IconButton onClick={() => toggleImage(foto)}>
            <img
              src={
                foto.favorita
                  ? "/icones/favorito-ativo.png"
                  : "/icones/favorito.png"
              }
              alt="Icone de favorito"
            />
          </IconButton>
          {!expandida && (
            <IconButton
              aria-hidden={expandida}
              onClick={() => aoZoomSolicitado(foto)}
            >
              <img src="/icones/expandir.png" alt="Icone de expandir" />
            </IconButton>
          )}
        </Footer>
      </figcaption>
    </Figure>
  );
}
