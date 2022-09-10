import styled, { css } from "styled-components"
import DividerProps from "./types"

export const Container = styled.div<DividerProps>`
  ${({ my, mt, mb }) => css`
    padding-top: ${my ?? mt ?? 5}px;
    padding-bottom: ${my ?? mb ?? 5}px;
  `}
`

export const Line = styled.div`
  height: 1px;
  background-color: #3337;
`