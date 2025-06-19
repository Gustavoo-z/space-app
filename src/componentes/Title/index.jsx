import styled from "styled-components";

const StyledTitle = styled.h1`
  color: #7b78e5;
  font-size: 32px;
  font-weight: 500;
  text-align: ${(props) => (props.alinhamento ? props.alinhamento : "left")};
`;

export default function Title({ children, alinhamento }) {
  return <StyledTitle alinhamento={alinhamento}>{children}</StyledTitle>;
}
