// SECTION variables

const iceCream = [{
    name: 'Chocolate',
    price: 3.50,
    quantity: 0
},
{
    name: 'Vanilla',
    price: 3,
    quantity: 0
},
{
    name: 'Strawberry',
    price: 3.25,
    quantity: 0
}]

const toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: .25
},
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Hot Sauce',
    price: .75,
    quantity: 0
}]

const vessels = [{
    name: 'Waffle Cone',
    price: 1.50,
    quantity: 0
},
{
    name: 'Strawberry Cone',
    price: 2.50,
    quantity: 0
},
{
    name: 'Cup',
    price: 1,
    quantity: 0

}]


// SECTION functions 


function addStrawberryIceCreamToCart() {
    const strawberryIceCream = iceCream.find(iceCream => iceCream.name == 'Strawberry')
    strawberryIceCream.quantity++
    console.log('great choice on the ', strawberryIceCream);

    drawIceCreamCart()

}

function addChocolateIceCreamToCart() {
    const chocolateIceCream = iceCream.find(iceCream => iceCream.name == 'Chocolate')
    chocolateIceCream.quantity++
    console.log('I also enjoy', chocolateIceCream);

    drawIceCreamCart()

}

function addVanillaIceCreamToCart() {
    const vanillaIceCream = iceCream.find(iceCream => iceCream.name == 'Vanilla')
    vanillaIceCream.quantity++
    console.log('could have chosen better', vanillaIceCream)

    drawIceCreamCart()


}

function addVesselToCart(vesselName) {
    const wantVessel = vessels.find(vesselItem => vesselItem.name == vesselName)
    wantVessel.quantity++
    console.log('Ahh seems like you want', wantVessel);

    drawVesselCart()

}

function addToppingsToCart(toppingName) {
    const wantToppings = toppings.find(topping => topping.name == toppingName)
    wantToppings.quantity++
    console.log('Not a bad choice', wantToppings)


    drawToppingsCart()
}


function drawIceCreamCart() {
    let content = ''

    iceCream.forEach(iceCream => {
        if (iceCream.quantity > 0) {
            const iceCreamPrice = (iceCream.price * iceCream.quantity).toFixed(2)
            content += `<p>
            ${iceCream.name} 🍨 Quantity: ${iceCream.quantity} 🍨 Price: ${iceCream.price}
            </p>`

        }
    })

    const cartElement = document.getElementById('cart')
    cartElement.innerHTML = content

    let iceCreamCart = iceCreamTotal()

    const iceCreamCartElement = document.getElementById('cartTotal')
    iceCreamCartElement.innerText = iceCreamCart.toFixed(2)

}

function iceCreamTotal() {
    let iceCreamCart = 0

    iceCream.forEach(iceCream => {
        const itemTotal = iceCream.quantity * iceCream.price
        iceCreamCart += itemTotal
    })

    return iceCreamCart
}


function drawVesselCart() {
    let content = ''

    vessels.forEach(vessel => {
        if (vessel.quantity > 0) {
            const vesselPrice = (vessel.price * vessel.quantity).toFixed(2)
            content += `<p>
            ${vessel.name} 🍦 Quantity: ${vessel.quantity} 🍦 Price: ${vessel.price}
            </p>`

        }
    })

    const cartElement = document.getElementById('vesselCart')
    cartElement.innerHTML = content

    let vesselCart = vesselTotal()


    const vesselCartElement = document.getElementById('cartTotal')
    vesselCartElement.innerText = vesselCart.toFixed(2)

}

function vesselTotal() {
    let vesselCart = 0

    vessels.forEach(vessel => {
        const itemTotal = vessel.quantity * vessel.price
        vesselCart += itemTotal
    })

    return vesselCart
}


function drawToppingsCart() {
    let content = ''

    toppings.forEach(topping => {
        if (topping.quantity > 0) {
            const toppingPrice = (topping.price * topping.quantity).toFixed()
            content += `<p>
            ${topping.name} 😁 Quantity: ${topping.quantity} 😁 Price: ${topping.price}
            </p>`
        }
    })

    const cartElement = document.getElementById('toppingCart')
    cartElement.innerHTML = content

    let toppingTotal = toppingsTotal()

    const toppingTotalElement = document.getElementById('cartTotal')
    toppingTotalElement.innerText = toppingTotal.toFixed(2)


}

function toppingsTotal() {
    let toppingTotal = 0

    toppings.forEach(topping => {
        const itemTotal = topping.quantity * topping.price
        toppingTotal += itemTotal
    })

    return toppingTotal
}


function totalPrice() {

    let iceCreamTotal = drawIceCreamCart()
    let vesselTotal = drawVesselCart()
    let toppingsTotal = drawToppingsCart()

    iceCreamTotal + vesselTotal + toppingsTotal

}



