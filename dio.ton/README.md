Projeto node com arquivo main.js que cria os itens e os edita.

Arquivo item.js com a função createItem() que organiza os inputs em um objeto.

Arquivo cart.js com as seguintes funções:

addItem() recebe o objeto criado por createItem() e o adiciona no carrinho
calculateTotal() soma todos os subtotais de cada item
deleteItem() recebe um nome, encontra o item com esse nome e o remove
removeFromItem() reduz a quantidade de um item em 1, se a qunatidade for maior que 1. Se a quantidade for igual à 1, o item é deletado
printCart() mostra o carrinho de compras no console
setSize() ajusta o nome dos itens, de modo que o tamanho da string seja igual em todos, para que os itens se alinhem ao serem printados por printCart()
