#language: pt

Funcionalidade: Adicionar produto ao carrinho

Contexto:
Dado que o usuário está na página do produto

Cenário: Adicionar produto ao carrinho com sucesso
Quando o usuário seleciona as variações disponíveis de um produto
E o usuário preenche a quantidade de itens
E o usuário clica no botão "Comprar"
Então o produto deve ser adicionado ao carrinho

Cenário: Tentativa de compra com quantidade superior ao limite permitido
Quando o usuário preenche uma quantidade maior que 10 para o mesmo produto
Então o sistema deve retornar uma mensagem de erro
