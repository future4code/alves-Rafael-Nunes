import React from 'react'
import styled from 'styled-components'
import Post from './components/Post/Post'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Craudin'}
          fotoUsuario={
            'https://i.pinimg.com/564x/32/a7/51/32a7519aa65ee5fd5be80f8a74bc863e.jpg'
          }
          fotoPost={
            'https://i.pinimg.com/564x/04/da/50/04da5056da86eec52610300a363dc11e.jpg'
          }
        />

        <Post
          nomeUsuario={'nostalgiaGames'}
          fotoUsuario={
            'https://i.pinimg.com/564x/af/7a/1a/af7a1ac8729932ec8f8dccfcb3288fa0.jpg'
          }
          fotoPost={
            'https://i.pinimg.com/564x/98/9e/d8/989ed8e692ae729cbf41d3f6cc1cf18f.jpg'
          }
        />
      </MainContainer>
    )
  }
}

export default App
