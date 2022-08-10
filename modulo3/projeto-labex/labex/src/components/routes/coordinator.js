import React from 'react'
import { useNavigate } from 'react-router-dom'

export const goBack = navigate => {
  navigate(-1)
}

export const goViagensPage = navigate => {
  navigate('/viagens')
}

export const goToLoginPage = navigate => {
  navigate('/login')
}

export const goToAdminPage = navigate => {
  navigate('/administracao')
}

export const goSubscribePage = navigate => {
  navigate('/inscreverse')
}
