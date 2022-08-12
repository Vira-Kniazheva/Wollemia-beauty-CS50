class ProductList {
  constructor() {
    this.container = document.querySelector('.product-container');
    this.productsService = new ProductsService();
    this.renderProducts();
  }
  async renderProducts() {
    let productListDomString = '';
    const products = await this.productsService.getProducts();
    products.forEach(product => {
      productListDomString += this.createProductDomString(product);
    });
    this.container.innerHTML = productListDomString;
    this.addEventListeners();
  }
  createProductDomString(product) {
    return `<div class="container">
              <div class="box">
                <img src="../img/${product.image}" alt="${product.name}" />
                <h4 class="name">${product.name}</h4>
                <p class="description">${product.description}</p>
                <h5 class="price">${product.price}</h5>
                <div class="cart">
                  <a href="#"><i class="bx bx-cart" data-id = ${product.id}></i></a>
                </div>
              </div>
            </div>`;
  }
  addEventListeners() {
    document.querySelectorAll('.bx-cart').forEach(btn => {
      btn.addEventListener('click', this.showProductInfo.bind(this));
    });
  }
  async showProductInfo(event) {
    const id = event.target.dataset.id;
    const product = await this.productsService.getProductById(id);
    const modal = document.querySelector('#shop');
    modal.querySelector('.box').innerHTML = product.name;
  }
}
new ProductList();