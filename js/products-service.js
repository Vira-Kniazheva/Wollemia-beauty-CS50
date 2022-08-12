class ProductsService {
    constructor() {
        if (!ProductsService._intance) ProductsService._intance = this
        return ProductsService._intance;
    }

    async getProducts() {
        if (!this.products) {
            this.products = await (await fetch('../api/products.json')).json();
        }
        return this.products;
    }

    async getProductById(id) {
        const products = await this.getProducts();
        return products.find(product => product.id === id);
    }
}