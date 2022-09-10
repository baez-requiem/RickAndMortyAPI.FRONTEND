import styled from "styled-components"

interface StyledButtonProps {
  color?: 'info' | 'success' | 'warning' | 'danger'
}

export const StyledButton = styled.button.attrs(({ color }) => ({
  color: color || 'info'
}))<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 50px;
  
  font-size: 24px;
  font-weight: bold;
  color: #07111c;

  background-color: ${({ theme, color }) => theme.colors[color]};
  box-shadow: 0px 0px 15px -5px ${({ theme, color }) => theme.colors[color]};
  
  padding: 5px 15px;

  cursor: pointer;

  transition: all .3s;

  &:hover:not([disabled]) {
    box-shadow: 0px 0px 10px 2.5px ${({ theme, color }) => theme.colors[color]};
  }
 
  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`