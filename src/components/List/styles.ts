import styled, { css } from "styled-components"

export const StyledUl = styled.ul`
  list-style: none;
`

interface StyledLiProps {
  selected: boolean
}

export const StyledLi = styled.li<StyledLiProps>`
  cursor: pointer;

  padding: 8px 16px;

  font-size: 16px;
  color: #c5c5c5;
  letter-spacing: .5px;

  ${({ selected, theme }) => selected 
    ? css`
      color: ${theme.colors.info};
      text-shadow: 0px 0px 10px ${theme.colors.info}40;
      cursor: unset;
    `
    : css`
      transition: all .3s;

      &:hover {
        background-color: #fff1;
      }   
    `  
}
`