#language: pt

Funcionalidade: Login de usuário

Contexto: 
Dado que o usuário está na tela de login

Cenário: Deve realizar login com sucesso
Quando o usuário preenche as informações de e-mail e senha corretamente
Então o usuário deve ser redirecionado para a tela "Minha Conta"

Cenário: Deve barrar o login com senha inválida
Quando o usuário preenche um e-mail válido e senha inválida
Então o usuário deve receber uma mensagem de alerta

Cenário: Deve barrar o login com usuário inexistente
Quando o usuário preenche um e-mail inválido
Então o usuário deve receber uma mensagem de alerta

Cenário: Deve validar que a senha é obrigatória para realizar o login
Quando o usuário tenta efetuar o login apenas com o e-mail
Então o usuário deve receber um alerta
