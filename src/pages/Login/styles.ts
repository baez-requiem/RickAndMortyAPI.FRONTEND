import styled, { keyframes } from "styled-components"

import backgroundImg from '/public/background.jpg'

const pulseAnim = keyframes`
  0%   { box-shadow: 0 0 0 #fff7; }
  50%   { box-shadow: 0 0 0 #fff7; }
  100%  { box-shadow: 0 0 47px #fff0; }
`

export const Content = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;

  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerBackground = styled.div`
position: absolute;
top: 0px;
left: 0px;

height: 100%;
width: 100%;

background-image: url(${backgroundImg});
background-size: cover;
filter: blur(2px) grayscale(40%);
`

export const Container = styled.div`
  position: relative;
  
  min-width: 300px;
  max-width: 600px;
  width: 85%;

  padding: 20px 40px;

  border-radius: 5px;
  border: 1px solid #fff2;

  background-color: ${({ theme }) => theme.colors.background};
  animation: ${pulseAnim} 2s linear infinite;

  h1 {
    text-align: center;
  }
`

export const Back = styled.div`
  position: absolute;

  top: 20px;
  left: 10px;

  cursor: pointer;

  transition: all .3s;

  &:hover {
    color: ${({ theme }) => theme.colors.info};
  }
`

export const AreaContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1, h4, p {
    text-align: center;
  }

  h4 {
    cursor: pointer;

    :hover {
      color: ${({ theme }) => theme.colors.info};
    }
  }
`

export const ErrorField = styled.p`
  font-size: 16px;
  padding-top: 5px;
  color: ${({ theme }) => theme.colors.danger};
`
export const SuccessField = styled(ErrorField)`
  color: ${({ theme }) => theme.colors.success};
`