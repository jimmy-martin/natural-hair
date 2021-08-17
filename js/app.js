const app = {

    products: [
        'FRUCTIS HAIR FOOD Banane',
        'FRUCTIS HAIR FOOD Baies de goji',
        'FRUCTIS HAIR FOOD Macadamia',
        'FRUCTIS HAIR FOOD Papaye',
    ],

    init: function () {
        let product1ButtonElement = document.querySelector('#product1-btn');
        let product2ButtonElement = document.querySelector('#product2-btn');
        let product3ButtonElement = document.querySelector('#product3-btn');
        let product4ButtonElement = document.querySelector('#product4-btn');

        product1ButtonElement.addEventListener('click', app.handleProductBtnClick);
        product2ButtonElement.addEventListener('click', app.handleProductBtnClick);
        product3ButtonElement.addEventListener('click', app.handleProductBtnClick);
        product4ButtonElement.addEventListener('click', app.handleProductBtnClick);
    },

    handleProductBtnClick: function (evt) {
        let myButton = evt.target;
        let currentProductID = myButton.id.substring(0, 8);
        let currentProductElement = myButton.closest('#' + currentProductID);
        let currentProductHTMLContent = currentProductElement.innerHTML;
        let myProduct = document.createElement('div');

        myProduct.innerHTML = currentProductHTMLContent;
        myProduct.classList.add('product');

        let myProductBtnElement = myProduct.querySelector('.btn');

        myProductBtnElement.textContent = 'Retirer de ma routine !';
        myProductBtnElement.addEventListener('click', app.handleListProductBtnClick);
        document.querySelector('.list').appendChild(myProduct);

        let isAddElement = currentProductElement.querySelector('.product-is-add');
        isAddElement.textContent = 'Produit ajouté à votre liste !';
        isAddElement.style.display = 'block';
        isAddElement.style.opacity = 1;
        (function fade() {
            (isAddElement.style.opacity -= .1) < 0 ? isAddElement.style.display = "none" : setTimeout(fade, 300)
        })();

    },

    handleListProductBtnClick: function (evt) {
        let myButton = evt.target;
        let currentProductElement = myButton.closest('.product');
        document.querySelector('.list').removeChild(currentProductElement);

    }
};

document.addEventListener('DOMContentLoaded', app.init)