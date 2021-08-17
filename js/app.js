const app = {

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
        let myProductIsAddElement = myProduct.querySelector('.product-is-add');
        myProduct.removeChild(myProductIsAddElement);

        let myProductBtnElement = myProduct.querySelector('.btn');

        myProductBtnElement.textContent = 'Retirer de ma liste !';
        myProductBtnElement.addEventListener('click', app.handleListProductBtnClick);
        document.querySelector('.list').appendChild(myProduct);

        let isAddElement = currentProductElement.querySelector('.product-is-add');
        isAddElement.textContent = 'Produit ajouté à votre liste !';
        isAddElement.style.display = 'block';
        isAddElement.style.opacity = 1;
        (function fade() {
            if ((isAddElement.style.opacity -= .1) < 0) {
                isAddElement.style.display = "none";
            } else {
                setTimeout(fade, 300)
            }
        })();
        document.querySelector('.list-container').style.display = 'block';

    },

    handleListProductBtnClick: function (evt) {
        let myButton = evt.target;
        let currentProductElement = myButton.closest('.product');
        document.querySelector('.list').removeChild(currentProductElement);
        
        if(document.querySelector('.list-container .list').hasChildNodes() === false){
            document.querySelector('.list-container').style.display = 'none';
        }

    },

    //TODO cacher 'Ma liste' quand je n'ai pas d'éléments dans ma liste
};

document.addEventListener('DOMContentLoaded', app.init);