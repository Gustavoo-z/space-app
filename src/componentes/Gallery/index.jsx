import styled from "styled-components";
import Tags from "../Tags";
import Title from "../Title";
import ImageGallery from "../ImageGallery";

import populares from "./populares.json";
import ImagesPopulares from "../ImagesPopulares";

const GalleryDiv = styled.div`
  display: flex;
`;

const GallerySection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const ContainerImages = styled.section`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
`;

export default function Gallery({
  fotos = [],
  aoFotoSelecionada,
  toggleImage,
  setSearchTagId,
}) {
  return (
    <>
      <Tags setSearchTagId={setSearchTagId} />
      <GalleryDiv>
        <GallerySection>
          <Title>Navegue pela galeria</Title>
          <ContainerImages>
            {fotos.map((foto) => (
              <ImageGallery
                aoZoomSolicitado={aoFotoSelecionada}
                toggleImage={toggleImage}
                key={foto.id}
                foto={foto}
              />
            ))}
          </ContainerImages>
        </GallerySection>
        <section>
          <Title alinhamento="center">Populares</Title>
          <ImagesPopulares populares={populares} />
        </section>
      </GalleryDiv>
    </>
  );
}
