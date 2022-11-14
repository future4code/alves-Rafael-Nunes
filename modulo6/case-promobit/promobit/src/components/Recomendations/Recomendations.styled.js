import styled from 'styled-components'

export const CardRecommendationMovie = styled.div`
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

export const ContainerRecommendationsCards = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1em;
  height: 34em;

  margin-left: 5em;
  margin-right: 5em;
  overflow-x: scroll;
`

export const MainRecomendtions = styled.div`
  flex-direction: column;

  h2 {
    margin-top: 5em;
    margin-left: 4em;
  }
`
