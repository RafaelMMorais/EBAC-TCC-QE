#language: pt

Funcionalidade: Gerenciar produtos no carrinho

Contexto:
Dado que o usuário está na tela do carrinho

Cenário: Aumentar quantidade de um produto dentro do carrinho
Quando o usuário aumenta a quantidade de um produto
Então a quantidade deve ser atualizada para o novo valor

Cenário: Erro ao tentar ultrapassar o valor de R$990
Dado que a compra do usuário ultrapassa o valor de R$990,00
Quando o usuário clica no botão de finalizar a compra
Então deve apresentar uma mensagem de erro
