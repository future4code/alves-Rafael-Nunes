import styled from 'styled-components'

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  height: 24em;
  flex-wrap: wrap;

  overflow-x: scroll;
`

export const ContainerCard = styled.div`
  width: 12em;
  height: 16em;

  img {
    width: 10em;
    height: 16em;
  }
`

export const ContainerActor = styled.div`
  margin-left: 5em;
  margin-right: 5em;

  h2 {
    margin-top: 6em;
  }
`
