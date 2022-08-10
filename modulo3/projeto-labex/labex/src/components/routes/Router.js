import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { TelaInicial } from '../../components/telaInicial/TelaInicial'
import { Viagens } from '../../components/viagens/Viagens'
import Administração from '../administração/Administração'
import InscreverSe from '../inscrever-se/InscreverSe'
import Login from '../login/Login'

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<TelaInicial />} />
          <Route path="viagens" element={<Viagens />} />
          <Route path="administracao" element={<Administração />} />
          <Route path="inscreverse" element={<InscreverSe />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<TelaInicial />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
