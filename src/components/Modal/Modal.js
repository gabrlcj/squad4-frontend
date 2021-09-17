import React from 'react'
import styled from 'styled-components'

const ModalBox = styled.div`
  display: flex;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
`

export const Modal = ({ showModal, setShowModal, children }) => {
  return <>{showModal ? <ModalBox>{children}</ModalBox> : null}</>
}
