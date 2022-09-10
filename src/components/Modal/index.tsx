import { createPortal } from 'react-dom'
import { CloseButton, Container, Overlay } from './styles'
import { IoMdClose } from 'react-icons/io'
import ModalProps from './types'
import { useModal } from './hooks/useModal'

const Modal = ({ children, onClose, show }:ModalProps) => {

  const { hasShow } = useModal(show)

  return hasShow ? createPortal(
    <Overlay show={show}>
      <Container>
        <CloseButton onClick={onClose}>
          <IoMdClose size={30} />
        </CloseButton>
        {children}
      </Container>
    </Overlay>
  , document.body)
  : null
}

export default Modal