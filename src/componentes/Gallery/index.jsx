import styled from "styled-components";
import Tags from "../Tags";
import Title from "../Title";

const GalleryDiv = styled.div`
  display: flex;
`;

const GallerySection = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const PopularesSection = styled.section``;

export default function Gallery() {
  return (
    <>
      <Tags />
      <GalleryDiv>
        <GallerySection>
          <Title>Navegue pela galeria</Title>
        </GallerySection>
        <PopularesSection>
          <Title alinhamento="center">Populares</Title>
        </PopularesSection>
      </GalleryDiv>
    </>
  );
}
