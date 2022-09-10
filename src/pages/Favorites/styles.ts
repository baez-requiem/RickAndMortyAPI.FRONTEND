import styled from "styled-components"

export const Content = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;

  height: 100%;
  width: 100%;

  z-index: 2;

  & h1 {
    text-align: center;
    text-shadow: 0px 0px 15px #000;
  }
`

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  padding: 40px;
  justify-content: space-around;
`

export const NavBar = styled.nav`
  display: flex;
  justify-content: flex-end;
  gap: 15px;

  z-index: 2;

  width: 100%;

  padding: 15px 20px;

  background-color: #0005;
`

export const Link = styled.button`
  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  color: ${({ theme }) => theme.colors.text};
  text-shadow: 0px 0px 1px ${({ theme }) => theme.colors.text};
  
  border: none;
  background: none;

  cursor: pointer;

  transition: all .3s;

  &:hover {
    color: ${({ theme }) => theme.colors.info};
    text-shadow: 0px 0px 2px ${({ theme }) => theme.colors.info};
  }
`