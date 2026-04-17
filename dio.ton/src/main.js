let cart = []

import createItem from "./services/item.js"
import {addItem , calculateTotal, deleteItem, removeFromItem , printCart, setSize} from "./services/cart.js"



let item1 = await createItem( "xícara com estampa" , 10.99 , 2)
cart = await addItem( cart , item1)


let item2 = await createItem( "garrafa térmica" , 18.99 , 2)
cart = await addItem( cart , item2)


let item3 = await createItem( "carrinho hotwheels ferrari 97" , 57.99 , 2)
cart = await addItem( cart , item3)



printCart(cart)

// No seu VSCode, utilize as funções "addItem" "deleteItem" e "removeFromItem" para interagir com o carrinho, e chame a função "printCart" depois, para ver o resultado da ação