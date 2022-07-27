import React from 'react'
import styled from 'styled-components'
import Post from './components/Post/Post'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

function App() {
  return (
    <MainContainer>
      <Post
        nomeUsuario={'paulinha'}
        fotoUsuario={'https://picsum.photos/50/50'}
        fotoPost={'https://picsum.photos/200/150'}
      />
      <Post
        nomeUsuario={'Claudinho'}
        fotoUsuario={
          'https://i.pinimg.com/564x/d5/d4/3a/d5d43a7dceef16619122735e7800ca08.jpg'
        }
        fotoPost={
          'https://i.pinimg.com/564x/dd/e2/2f/dde22fc6de2d0e37728d54c9e4f5ba3d.jpg'
        }
      />
      <Post
        nomeUsuario={'paulinho'}
        fotoUsuario={
          'https://i.pinimg.com/564x/00/08/77/00087733da3e6bb82b298160256c3bbc.jpg'
        }
        fotoPost={
          'https://i.pinimg.com/564x/3f/a3/8e/3fa38ec0d7c6aac73b8878ec619ed7e4.jpg'
        }
      />
    </MainContainer>
  )
}

export default App
