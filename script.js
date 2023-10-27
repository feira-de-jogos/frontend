/* eslint-disable no-undef */
const loginForm = document.getElementById('loginForm')
const usernameInput = document.getElementById('username')
const passwordInput = document.getElementById('password')

loginForm.addEventListener('submit', function (event) {
  event.preventDefault()

  const username = usernameInput.value
  const password = passwordInput.value

  axios.post('/api/v1/extrato', {
    id: username,
    senha: password
  })
    .then(response => {
      console.log('Resposta do servidor:', response.data)
    })
    .catch(error => {
      console.error('Erro na solicitação:', error)
    })
})