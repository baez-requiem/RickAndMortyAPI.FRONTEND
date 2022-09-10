import styled, { keyframes } from "styled-components"

const openAnim = keyframes`
  from { opacity: 0 }
  to { opacity: 1 }
`
const closeAnim = keyframes`
  from { opacity: 1 }
  to { opacity: 0 }
`

interface OverlayProps {
  show: boolean
}

export const Overlay = styled.div<OverlayProps>`
  position: fixed;
  top: 0px;
  left: 0px;

  z-index: 10;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100vh;

  background-color: #0009;

  animation: .5s linear 0s 1 ${({ show }) => show ? openAnim : closeAnim};
`

export const Container = styled.div`
  position: relative;
  
  min-width: 300px;
  max-width: 600px;
  width: 85%;

  padding: 10px;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 0px 5px 2px #fff3;
  
  transition: all .5s;
`

export const CloseButton = styled.button`
  position: absolute;
  top: -20px;
  right: -20px;
  
  height: 40px;
  width: 40px;

  border: none;
  border-radius: 20px;

  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 0px 5px #fff3;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.danger};;

  cursor: pointer;

  transition: all .3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.background};
    box-shadow: 0px 0px 5px ${({ theme }) => theme.colors.danger};
  }
`