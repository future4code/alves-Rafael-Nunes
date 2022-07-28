import React, { useState } from 'react'
import styled from 'styled-components'
import Post from './components/Post/Post'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

const StylecreatePost = styled.div`
  border: 1px solid gray;
  margin: 8px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  width: 270px;
  align-items: center;
`

const StyleInput = styled.input`
  margin: 8px;
`

const StyleButton = styled.button`
  width: 100px;
`

function App() {
  const [postagens, setPostagens] = useState([
    {
      nomeUsuario: 'paulinha',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/200/150'
    },
    {
      nomeUsuario: 'Claudinho',
      fotoUsuario:
        'https://i.pinimg.com/564x/d5/d4/3a/d5d43a7dceef16619122735e7800ca08.jpg',
      fotoPost:
        'https://i.pinimg.com/564x/dd/e2/2f/dde22fc6de2d0e37728d54c9e4f5ba3d.jpg'
    },
    {
      nomeUsuario: 'paulinho',
      fotoUsuario:
        'https://i.pinimg.com/564x/00/08/77/00087733da3e6bb82b298160256c3bbc.jpg',
      fotoPost:
        'https://i.pinimg.com/564x/3f/a3/8e/3fa38ec0d7c6aac73b8878ec619ed7e4.jpg'
    }
  ])

  const Posts = postagens.map((postagens, index) => {
    return (
      <Post
        key={index}
        nomeUsuario={postagens.nomeUsuario}
        fotoUsuario={postagens.fotoUsuario}
        fotoPost={postagens.fotoPost}
      />
    )
  })

  const [inputNewUser, setInputNewUser] = useState('')
  const [profilePicture, setProfilePicture] = useState('')
  const [postPicture, setPostPicture] = useState('')

  const novoPost = () => {
    const novoPost = {
      nomeUsuario: inputNewUser,
      fotoUsuario: profilePicture,
      fotoPost: postPicture
    }

    const criarPost = [...postagens, novoPost]

    setPostagens(criarPost)
  }

  const onChangeUser = event => {
    setInputNewUser(event.target.value)
    console.log(event.target.value)
  }

  const onChangeProfilePicture = event => {
    setProfilePicture(event.target.value)
    console.log(event.target.value)
  }

  const onChangePostPicture = event => {
    setPostPicture(event.target.value)
    console.log(event.target.value)
  }

  return (
    <MainContainer>
      <StylecreatePost>
        <StyleInput
          placeholder="Nome:"
          onChange={onChangeUser}
          value={inputNewUser}
        />
        <StyleInput
          placeholder="Foto De perfil:"
          onChange={onChangeProfilePicture}
          value={profilePicture}
        />
        <StyleInput
          placeholder="Foto Do Post:"
          onChange={onChangePostPicture}
          value={postPicture}
        />

        <StyleButton onClick={novoPost}>Criar Post</StyleButton>
      </StylecreatePost>

      <div>{Posts}</div>
    </MainContainer>
  )
}

export default App
