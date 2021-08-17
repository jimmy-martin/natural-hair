const app = {

    products: [],

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

        // Check if product is already in the list
        if (app.products.indexOf(myProduct.querySelector('.product-title').textContent) > -1){
            console.log('Cet article est déjà dans la liste');
            let isAddElement = currentProductElement.querySelector('.product-is-add');
            isAddElement.textContent = 'Le produit est déjà dans la liste !';
            isAddElement.style.backgroundColor = '#e82416';
            isAddElement.style.color = 'black';
            isAddElement.style.padding = '4px';
            isAddElement.style.display = 'block';
            isAddElement.style.opacity = 1;
            (function fade() {
                if ((isAddElement.style.opacity -= .1) < 0) {
                    isAddElement.style.display = 'none';
                } else {
                    setTimeout(fade, 300)
                }
            })();
        } else {
            app.products.push(myProduct.querySelector('.product-title').textContent);
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
    
            app.refreshListCount();
        }
    },

    handleListProductBtnClick: function (evt) {
        let myButton = evt.target;
        let currentProductElement = myButton.closest('.product');
        let index = app.products.indexOf(currentProductElement.querySelector('.product-title').textContent);
        app.products.splice(index, index + 1);
        document.querySelector('.list').removeChild(currentProductElement);

        if (document.querySelector('.list-container .list').hasChildNodes() === false) {
            document.querySelector('.list-container').style.display = 'none';
        }

        app.refreshListCount();
    },

    refreshListCount: function (evt) {
        let listCount = document.querySelector('#list-count');
        listCount.textContent = document.querySelector('.list').getElementsByTagName('div').length;
    },
};

document.addEventListener('DOMContentLoaded', app.init);