function logar() {
  var login = document.getElementById('login').value
  var senha = document.getElementById('senha').value
  if (login == '1234' && senha == '1234'){
    alert("sucesso")
    location.href = "login.html"
  }else {
    alert("Usuário ou senha incorreta")
  }
}
