import styled from 'styled-components'

export const MainContainer = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  max-width: 100vw;
`

export const CardMovie = styled.div`
  display: flex;
  flex-direction: column;
  width: 17em;
  margin: 1em;

  div {
    margin-top: 1em;
    height: 4.2em;

    h3 {
      font-family: 'Roboto';
      font-style: bold;
      color: #000000;
      font-size: 16px;
      line-height: 24px;
      line-height: 128%;
      vertical-align: center;
    }

    span {
      font-family: 'Roboto';
      color: #646464;
    }
  }
`
