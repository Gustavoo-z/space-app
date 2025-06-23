import { styled } from "styled-components";
import Header from "./componentes/Header";
import Sidebar from "./componentes/Sidebar";
import Banner from "./componentes/Banner";
import Gallery from "./componentes/Gallery";
import { useEffect, useState } from "react";

import fotos from "./fotos.json";
import ModalZoom from "./componentes/ModalZoom";
import Footer from "./componentes/Footer";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const StyledDivBanner = styled.div`
  display: flex;
`;

const AppContainer = styled.div`
  margin: 0 20px;
  max-width: 100%;
`;

const GalleryDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export default function App() {
  const [fotosGaleria, setFotosGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [searchText, setSearchText] = useState("");
  const [searchTagId, setSearchTagId] = useState(0);

  useEffect(() => {
    const filteredPhotos = fotos.filter((foto) => {
      const filterForTag = !searchTagId || foto.tagId === searchTagId;
      const filterForText =
        !searchText ||
        foto.titulo.toLowerCase().includes(searchText.toLowerCase());
      return filterForTag && filterForText;
    });
    setFotosGaleria(filteredPhotos);
  }, [searchText, searchTagId]);

  function toggleImage(foto) {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita,
      });
    }
    setFotosGaleria(
      fotosGaleria.map((fotoDaGaleria) => {
        return {
          ...fotoDaGaleria,
          favorita:
            fotoDaGaleria.id === foto.id
              ? !foto.favorita
              : fotoDaGaleria.favorita,
        };
      })
    );
  }

  return (
    <>
      <FundoGradiente>
        <AppContainer>
          <Header setSearchText={setSearchText} />
          <StyledDivBanner>
            <Sidebar />
            <GalleryDiv>
              <Banner
                img="/src/assets/banner.png"
                text="A galeria mais completa de fotos do espaço!"
              />
              <Gallery
                aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
                toggleImage={toggleImage}
                fotos={fotosGaleria}
                setSearchTagId={setSearchTagId}
              />
            </GalleryDiv>
          </StyledDivBanner>
        </AppContainer>
        <ModalZoom
          foto={fotoSelecionada}
          aoFechar={() => setFotoSelecionada(null)}
          toggleImage={toggleImage}
        />
        <Footer />
      </FundoGradiente>
    </>
  );
}
