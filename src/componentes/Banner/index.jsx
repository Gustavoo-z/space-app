import styled from "styled-components";

const StyledFigure = styled.figure`
  background-image: ${(props) => `url(${props.$backGroundImage})`};
  flex-grow: 1;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  min-height: 300px;
  margin: 0;
  border-radius: 20px;
  max-width: 100%;
  background-size: cover;
  h1 {
    font-weight: 400;
    font-size: 40px;
    line-height: 48px;
    color: #ffffff;
    max-width: 300px;
    padding: 0 64px;
  }
`;

export default function Banner({ img, text }) {
  return (
    <StyledFigure $backGroundImage={img}>
      <h1>{text}</h1>
    </StyledFigure>
  );
}
