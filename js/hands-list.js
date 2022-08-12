class HandsList {
    constructor() {
        this.container = document.querySelector('.hands-container');
        this.handsService = new HandsService();
        this.renderHands();
    }
    async renderHands() {
        let handsListDomString = '';
        const hands = await this.handsService.getHands();
        hands.forEach(hands => {
            handsListDomString += this.createHandsDomString(hands);
        });
        this.container.innerHTML = handsListDomString;
        this.addEventListeners();
    }
    createHandsDomString(hands) {
        return `<div class="container">
              <div class="box">
                <img src="../img/${hands.image}" alt="${hands.name}" />
                <h4 class="name">${hands.name}</h4>
                <p class="description">${hands.description}</p>
                <h5 class="price">${hands.price}</h5>
                <div class="cart">
                  <a href="#"><i class="bx bx-cart" data-id = ${hands.id}></i></a>
                </div>
              </div>
            </div>`;
    }
    addEventListeners() {
        document.querySelectorAll('.bx-cart').forEach(btn => {
            btn.addEventListener('click', this.showHandsInfo.bind(this));
        });
    }
    async showHandsInfo(event) {
        const id = event.target.dataset.id;
        const hands = await this.handsService.getHandsById(id);
        const modal = document.querySelector('#shop');
        modal.querySelector('.box').innerHTML = hands.name;
    }
}
new HandsList();