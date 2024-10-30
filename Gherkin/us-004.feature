            Funcionalidade: Visualização de Detalhes do Produto

            Como um cliente do e-commerce,
            Eu quero visualizar detalhes de um produto,
            Para que eu possa tomar uma decisão informada antes de realizar a compra.

            Cenário: Visualizar detalhes de um produto
            Dado que o cliente está na página inicial do e-commerce
            Quando ele clica em um produto da lista
            Então ele deve ser redirecionado para a página de detalhes do produto
            E deve ver:
            | Nome do produto                     |
            | Imagem do produto em alta resolução |
            | Descrição detalhada do produto      |
            | Preço do produto                    |
            | Opções de tamanho ou cor            |
            | Avaliações e comentários            |
            | Opção "Adicionar ao Carrinho"       |
            | Disponibilidade de estoque          |
E deve ter a opção de ser notificado quando o produto voltar ao estoque
E deve ter a opção de voltar à lista de produtos
