export async function addItem(cart , item){

    cart.push(item)
    return cart
}


export async function calculateTotal(cart){
    let total = 0
    for(let i = 0 ; i < cart.length ; i++){ total += parseFloat(  cart[i].subtotal() ) }

    return total.toFixed(2)
}


export async function deleteItem(cart , name){

    let index = cart.findIndex((item) => item.name === name)

    if( index !== -1 ){ cart.splice(index , 1) } else { console.log(`❗The item you tried to delete doesn't exist\n`)}
}



export async function removeFromItem(cart , name){

    let index = cart.findIndex((item) => item.name === name)

    if( index >= 0 && index < cart.length){

        if( cart[index].quantity > 1 ){

            cart[index].quantity -= 1
        
            }else { cart.splice( index , 1 )}
  
        }else {
            console.log(`❗The item you tried to remove from doesn't exist\n`)

        }
}



export async function printCart( cart ){

    console.log(`🛒Here's your complete Shopee list:\n`)

    cart = await setSize(cart)

    for(let i = 0; i < cart.length ; i++){  
        console.log(`${i + 1}° - ${cart[i].name} |  R$ ${cart[i].price}  |  ${cart[i].quantity}x  | subtotal: R$ ${cart[i].subtotal()} \n `)
    }
    console.log(`  The total price is:  R$ ${await calculateTotal(cart)} \n_____________________________________________________________________\n`)
}


export async function setSize(cart){

    let maxSizeForName = 35

    for( let i = 0; i < cart.length; i++){

    cart[i].name = cart[i].name.slice( 0, maxSizeForName ).padEnd( maxSizeForName , " " )
    }
    return cart
}