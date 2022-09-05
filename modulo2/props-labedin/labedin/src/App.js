import React from 'react'
import './App.css'
import CardGrande from './components/CardGrande/CardGrande'
import CardMenor from './components/CardMenor/CardMenor'
import ImagemButton from './components/ImagemButton/ImagemButton'
import style from 'styled-components'

function App() {
  return (
    <div>
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande
          imagem="https://uploads-ssl.webflow.com/5d640f4558306be99cf47a0e/5dd57846babb597b77c6bb1d_PerfilFuture4_cor.png"
          nome="Rafael Garcia"
          descricao="Oi sou o Rafael, tenho 19 anos e sou estudante da Labenu. Gosto muito de ouvir musica e de tecnologia no geral."
        />

        <ImagemButton
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png"
          texto="Ver mais"
        />
      </div>

      <CardMenor
        imagem="https://cdn-icons.flaticon.com/png/512/3711/premium/3711159.png?token=exp=1654643618~hmac=90cea56856018ab8f2ee971e10d68f75"
        conteudo="rafaelGarcian@gmail.com"
      />
      <CardMenor
        imagem="https://cdn-icons.flaticon.com/png/512/5837/premium/5837790.png?token=exp=1654643907~hmac=6081476da56678e9d7ad5c39f76b7867"
        conteudo="Endereço: Maranguape-CE"
      />

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png"
          nome="Labenu"
          descricao="Estudando para ser um desenvolvedor!"
        />

        <CardGrande
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg"
          nome="--"
          descricao="***************"
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png"
          texto="Facebook"
        />

        <ImagemButton
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png"
          texto="Twitter"
        />
      </div>
    </div>
  )
}

export default App
