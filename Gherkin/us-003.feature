#language: pt

Funcionalidade: Gerenciar cupons

Cenário: Deve listar cupons com sucesso
Dado que a requisição GET foi configurada para listar cupons
E que o token foi preenchido corretamente com permissão de cupons
Quando enviar a requisição
Então espero que os cupons sejam listados
E que retorne Status Code 200 Ok

Cenário: Deve cadastrar cupons com sucesso
Dado que a requisição POST foi configurada para cadastrar cupons
E que o token foi preenchido corretamente com permissão de cupons
Quando preencher os campos obrigatórios: Código do cupom (não duplicado), valor, tipo de desconto, descrição
E enviar a requisição
Então devo receber uma mensagem de cadastro com sucesso
E que retorne Status Code 200 Ok

Cenário: Deve impedir listagem ou cadastro sem autenticação
Dado que as requisições GET e POST de cupons estão configuradas corretamente
E o header Authorization está vazio ou com token incorreto
Quando enviar a requisição
Então deve retornar Status Code 401

Cenário: Deve impedir cadastro de cupons com código já existente
Dado que a requisição POST foi configurada para cadastrar cupons
E que o token foi preenchido corretamente com permissão de cupons
E que existe um cupom com código “teste10”
Quando preencher o código do cupom com “teste10”
Então espero que seja retornado Status Code 400 com um alerta de código duplicado
