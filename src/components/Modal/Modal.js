import React from "react";
import styled from "styled-components";

const ModalBox = styled.div`
  display: flex;
  margin: 0 auto;
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
`;

export const Modal = ({showModal, setShowModal, children}) => {
  return (
  <>
    {showModal ?
      <ModalBox>
        {children}
      </ModalBox> : null
    }
  </>
  )
};