import { styled } from "styled-components";
import Header from "./componentes/Header";
import Sidebar from "./componentes/Sidebar";
import Banner from "./componentes/Banner";
import Gallery from "./componentes/Gallery";

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

function App() {
  return (
    <>
      <FundoGradiente>
        <AppContainer>
          <Header />
          <StyledDivBanner>
            <Sidebar />
            <GalleryDiv>
              <Banner
                img="/src/assets/banner.png"
                text="A galeria mais completa de fotos do espaço!"
              />
              <Gallery />
            </GalleryDiv>
          </StyledDivBanner>
        </AppContainer>
      </FundoGradiente>
    </>
  );
}

export default App;
