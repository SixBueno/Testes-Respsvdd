let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})


function entrar(){
    let usuario = document.querySelector('#usuario')
    let userLabel = document.querySelector('#userLabel')

    let senha = document.querySelector('#senha')
    let senhaLabel = document.querySelector('#senhaLabel')

    let msgError = document.querySelector('#msgError')
    let listaUser = []

    let userValid = {
        nome: '',
        user: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    listaUser.forEach((item) => {
       if (usuario.value == item.userCadastrado && senha.value == item.senhaCadastrado) {
        
        userValid = {
            nome: item.nomeCadastrado,
            user: item.userCadastrado,
            senha: item.senhaCadastrado
        }

       } 
    });

        if (usuario.value == userValid.user && senha.value == userValid.senha) {
            window.location.href = 'file:///C:/Users/Bruno%20Makalyster/Desktop/Projeto-GameMania-Senai/index.html'

            let token = Math.random().toString(16).substring(2)
            localStorage.setItem('token', token)

        } else {
            usuario.setAttribute('style', 'border-color: red')
            userLabel.setAttribute('style', 'color: red')
            senha.setAttribute('style', 'border-color: red')
            senhaLabel.setAttribute('style', 'color: red')
            msgError.setAttribute('style', 'display: block')
            msgError.innerHTML = 'Usuário ou senha incorretos'
            usuario.focus()
        }

}