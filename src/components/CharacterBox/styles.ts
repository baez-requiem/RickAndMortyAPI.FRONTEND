import styled from "styled-components"

export const Container = styled.article`
  position: relative;
  bottom: 0px;

  display: flex;
  flex-direction: column;

  max-width: 220px;

  box-shadow: 10px 10px 30px 5px #ccc2;
  background-color: #fff2;

  border-radius: 5px;
  border: 2px solid #fff1;
  overflow: hidden;

  cursor: pointer;

  transition: all .3s;

  &:hover {   
    bottom: 5px;
    box-shadow: 15px 20px 10px 0px #ccc1;
  }
`

interface FavoriteContainerProps {
  isFavorite: boolean
}

export const FavoriteContainer = styled.div<FavoriteContainerProps>`
  position: absolute;
  top: 7.5px;
  right: 7.5px;

  width: 100%;

  display: flex;
  justify-content: flex-end;

  color: ${({ theme, isFavorite }) => isFavorite ? theme.colors.warning : '#555'};
`

export const FavoriteIconContainer = styled.div`
  display: inline-block;

  position: relative;
  right: 0px;
  top: 0px;

  transition: all .3s;
  font-size: 40px;

  &:hover {
    font-size: 45px;
    
    top: -2.5px;
    right: -2.5px;
  }
`

export const CharImgContainer = styled.div`
  width: 100%;
  height: 100%;
`

export const CharImg = styled.img.attrs({ loading: 'lazy' })`
  width: 100%;
  height: 100%;
  object-position: center center;
  object-fit: cover;
`

export const InfosContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;

  padding: 5px;
`

export const StyledH3 = styled.h3`
  font-weight: 900;
  text-align: center;
`