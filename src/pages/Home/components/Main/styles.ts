import styled from "styled-components"

export const Container = styled.main`
  padding: 20px;

  @media (max-width: 768px) {
    padding: 20px 0px;
  }
`

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;

  flex-wrap: wrap;

  margin: 20px 0;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  }

`

export const DataContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const DataContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const ListContainer = styled.aside`
  border-right: 1px solid #e5e5e530;
  padding-right: 5px;
`

export const CountContainer = styled.div`
  padding: 0 40px;

  margin-bottom: 20px;
`

export const CharactersContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 40px;
  padding: 0 40px;
  flex-wrap: wrap;

  justify-content: space-around;
  align-items: flex-start;
`