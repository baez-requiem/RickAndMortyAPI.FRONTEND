import styled, { css, keyframes } from "styled-components"

interface LoadContainerProps {
  $loading?: boolean
}

const openAnim = keyframes`
  from { 
    opacity: 0;
    position: relative;
  }
  to {
    opacity: 1;
    position: relative;
  }
`
const closeAnim = keyframes`
  0% { 
    opacity: 1;
    height: 150px;
  }
  66% {
    opacity: 0;
    height: 150px;
  }
  100% {
    opacity: 0;
    height: 0px;
  }
`

export const LoadContainer = styled.div<LoadContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
  height: 150px;

  ${({ $loading }) => !$loading && css`
    animation: 1s linear 0s 1 ${closeAnim} forwards;
  `}
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;

  position: absolute;

  opacity: 0;
  animation: 1s linear 1s 1 ${openAnim} forwards;
`

export const Card = styled.div`
  width: 200px;
  height: 300px;

  border-radius: 5px;
  overflow: hidden;
`

export const CharImg = styled.img`
  width: 100%;
  height: 100%;
  object-position: center center;
  object-fit: cover;
`

export const DetailsContainer = styled.div`
  flex: 1;
`

export const DetailTitle = styled.h1`
  font-weight: 200;
  font-family: 'Courier Prime', monospace;
  text-align: center;
`

export const DetailInfo = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-weight: 200;
  font-family: 'Courier Prime', monospace;

  padding-top: 10px;
  border-bottom: 1px solid #ccc3;
`