import React from 'react'
import styled from 'styled-components'
import CardGrande from './components/CardGrande/CardGrande'
import ImagemButton from './components/ImagemButton/ImagemButton'
import {
  ContainerSectionPage,
  FatherDiv,
  GlobalDiv,
  TitlesContainer
} from './StyleApp.js'
import CardPequeno from './components/CardPequeno/CardPequeno.js'

function App() {
  return (
    <FatherDiv>
      <ContainerSectionPage>
        <TitlesContainer>Dados pessoais</TitlesContainer>
        <CardGrande
          imagem="https://avatars.githubusercontent.com/u/92956710?v=4"
          nome="Rafael"
          descricao="Oi, Me chamo Rafael tenho 19 anos, sou estudante da Labenu e atualmente estudo para ser dev fullstack"
        />

        <ImagemButton
          imagem="https://cdn-icons-png.flaticon.com/512/626/626013.png"
          texto="Ver mais"
        />

        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/725/725643.png"
          titulo="Email"
          dado="Rafael@gmail.com"
        />

        <CardPequeno
          imagem="https://cdn-icons.flaticon.com/png/512/5580/premium/5580511.png?token=exp=1658868099~hmac=f25d4c155567a016556fbe73e12a45f2"
          titulo="Endereço"
          dado="Rua tal"
        />
      </ContainerSectionPage>

      <ContainerSectionPage>
        <TitlesContainer>Experiências profissionais</TitlesContainer>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Formando desenvolvedores para o mercado de trabalho!"
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="NASA"
          descricao="Apontando defeitos."
        />
      </ContainerSectionPage>

      <ContainerSectionPage>
        <TitlesContainer>Minhas redes sociais</TitlesContainer>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </ContainerSectionPage>
    </FatherDiv>
  )
}

export default App
