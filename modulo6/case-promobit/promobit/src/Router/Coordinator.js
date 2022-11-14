export const goToBackPage = navigate => {
  navigate(-1)
}

export const goToHomePage = navigate => {
  navigate('/home')
}

export const goToDatailPage = (navigate, id) => {
  navigate(`/datails/${id}`)
}
