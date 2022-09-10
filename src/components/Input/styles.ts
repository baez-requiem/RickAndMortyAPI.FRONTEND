import styled, { css } from "styled-components"

const inputSizeCss = {
  sm: css`
    height: 48px;
    padding: 15px;
    
    input {
      font-size: 16px;
    }
  `,
  md: css`
    height: 52px;
    padding: 20px;
    
    input {
      font-size: 19px;
    }
  `,
  lg: css`
    height: 56px;
    padding: 25px;
    
    input {
      font-size: 22px;
    }
  `
}

interface ContainerProps {
  size: 'sm' | 'md' | 'lg'
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  background-color: #0007;
  border-radius: 50px;

  ${({ size }) => inputSizeCss[size]}
`

export const StyledInput = styled.input`
  background-color: transparent;
  border: none;

  caret-color: #999;
  color: #e5e5e5;

  width: auto;
  flex: 1;

  &:focus{
    outline: none;
  }
`

interface IconContainerProps {
  hasAction:boolean
}

export const IconContainer = styled.button<IconContainerProps>`
  position: relative;
  right: -15px;

  color: #e5e5e5;

  height: 42px;
  width: 42px;
  
  border: none;
  border-radius: 50%;
  
  background-color: #fff1;
  transition: all .3s;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ hasAction }) => hasAction && css`
    cursor: pointer;

    &:hover {
      background-color: #fff3;
    }
  `}

`