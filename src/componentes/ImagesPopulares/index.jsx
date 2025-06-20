import styled from "styled-components";

const ImagesPopularesDiv = styled.div`
  margin-left: 20px;

  & li {
    margin-bottom: 24px;
  }

  & img {
    border-radius: 20px;
  }
`;

const ButtonPopulares = styled.button`
  width: 100%;
  height: 56px;
  background-color: transparent;
  color: #fff;
  font-size: 20px;
  border-radius: 10px;
  padding: 8px;
  border: 1px solid #c98cf1;
  cursor: pointer;
`;

export default function ImagesPopulares({ populares }) {
  return (
    <ImagesPopularesDiv>
      <ul>
        {populares.map((foto) => (
          <li key={foto.id}>
            <img src={foto.src} alt={foto.alt} />
          </li>
        ))}
      </ul>
      <ButtonPopulares>Ver mais</ButtonPopulares>
    </ImagesPopularesDiv>
  );
}
