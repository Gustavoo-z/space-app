import styled from "styled-components";
import ImageGallery from "../ImageGallery";
import IconButton from "../IconButton";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const StyledDialog = styled.dialog`
  position: absolute;
  top: 294px;
  background: transparent;
  padding: 0;
  border: 0;
  width: 1156px;
  display: flex;
  justify-content: center;
  form {
    button {
      position: relative;
      top: 20px;
      right: 60px;
    }
  }
`;

export default function ModalZoom({ foto, aoFechar }) {
  return (
    <>
      {foto && (
        <>
          <Overlay />
          <StyledDialog open={!!foto} onClose={aoFechar}>
            <ImageGallery foto={foto} expandida={true} />
            <form method="dialog">
              <IconButton formMethod="dialog">
                <img src="/icones/fechar.png" alt="Icone de fechar" />
              </IconButton>
            </form>
          </StyledDialog>
        </>
      )}
    </>
  );
}
