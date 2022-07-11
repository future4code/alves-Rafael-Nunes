import styled from 'styled-components'

const StyleHeder = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  justify-content: space-around;
  border: 1px solid purple;
  padding: 10px;
`

export default function Header() {
  return (
    <StyleHeder>
      <h1>AstroMatch</h1>
      <button>
        <h1>telas</h1>
      </button>
    </StyleHeder>
  )
}
