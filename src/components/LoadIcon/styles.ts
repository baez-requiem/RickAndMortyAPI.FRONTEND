import styled, { keyframes } from "styled-components"

const loadAnim = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`

export const Container = styled.div`
  display: inline-block;

  padding: 0 5px;

  &:first-child {
    animation: ${loadAnim} 1s infinite linear;
  }
`