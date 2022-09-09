class Roll {
    constructor(type, price, glazing, packSize, elementID) {
        this.type = type;
        this.price = price;
        this.glazing = glazing;
        this.packSize = packSize;
        
        this.element = document.querySelector(elementID);

        const btnsPackSize = this.element.querySelectorAll('input[class="radioCount"]');
        btnsPackSize.forEach(btnPackSize => btnPackSize.onclick = this.updatePackSize.bind(this));

        this.element.querySelector('[name="glazingSelection"]').addEventListener("change", () => {
            this.updateGlazing();
        });

        const btnAddCart = this.element.querySelector('.add-to-cart-button');
        btnAddCart.onclick = this.addToCart.bind(this);

        this.updateFinalPrice();
    }

    addToCart() {
        const totalCart = document.querySelector('.total-cart');
        totalCart.style.visibility = 'hidden';

        const cartNotification = document.querySelector('.cart-notification');
        cartNotification.innerHTML = `Added to cart:<br><br><b>${this.type}</b><br>${this.glazing} Glazing<br>Pack of ${this.packSize}<br>Price: $${this.finalPrice.toFixed(2)}`
        cartNotification.style.visibility = 'visible'

        updateCart(this.finalPrice.toFixed(2));
        setTimeout(() => {
            cartNotification.style.visibility = 'hidden'
            totalCart.style.visibility = 'visible';
        }, 3000);
    }

    updateGlazing() {
        this.glazing = this.element.querySelector('[name="glazingSelection"]').value;
        this.updateFinalPrice();
    }

    updatePackSize() {
        this.packSize = this.element.querySelector('input[class="radioCount"]:checked').value;
        this.updateFinalPrice();
    }

    updateFinalPrice() {
        switch(this.glazing) {
            case "Sugar Milk":
                this.priceAdaptationAdd = 0.00;
                break;
            case "Vanilla Milk":
                this.priceAdaptationAdd = 0.50;
                break;
            case "Double Chocolate":
                this.priceAdaptationAdd = 1.50;
                break;
            default: // default to Keep Original glazing, so no need to add case for this
                this.glazing = "Keep Original";
                this.priceAdaptationAdd = 0.00;
        }

        switch(parseInt(this.packSize)) {
            case 3:
                this.priceAdaptationMult = 3;
                break;
            case 6:
                this.priceAdaptationMult = 5;
                break;
            case 12:
                this.priceAdaptationMult = 10;
                break;
            default: // default to packsize 1, so no need to add case for this
                this.packSize = 1;
                this.priceAdaptationMult = 1;
        }
        this.finalPrice = (this.price + this.priceAdaptationAdd) * this.priceAdaptationMult;
        this.element.querySelector('.price').innerText = `\$ ${this.finalPrice.toFixed(2)}`;
    }
}

let totalItems = 0;
let totalPrice = 0;

function updateCart(addedPrice) {
    const totalCart = document.querySelector('.total-cart');

    totalItems += 1;
    totalPrice += parseFloat(addedPrice);
    totalCart.innerHTML = `${totalItems} ${(totalItems != 1) ? "items" : "item" }<br>Total: $${totalPrice.toFixed(2)}`
}

const ocrRoll = new Roll(
    'Original Cinnamon Roll',
    2.49,
    'Keep Original',
    1,
    "#original-cinnamon-roll"
)

const acrRoll = new Roll(
    'Apple Cinnamon Roll',
    3.49,
    'Keep Original',
    1,
    "#apple-cinnamon-roll"
)

const rcrRoll = new Roll(
    'Raisin Cinnamon Roll',
    2.99,
    'Keep Original',
    1,
    "#raisin-cinnamon-roll"
)

const wcrRoll = new Roll(
    'Walnut Cinnamon Roll',
    3.49,
    'Keep Original',
    1,
    "#walnut-cinnamon-roll"
)

const dccrRoll = new Roll(
    'Double-Chocolate Cinnamon Roll',
    3.99,
    'Keep Original',
    1,
    "#double-chocolate-cinnamon-roll"
)

const scrRoll = new Roll(
    'Strawberry Cinnamon Roll',
    3.99,
    'Keep Original',
    1,
    "#strawberry-cinnamon-roll"
)