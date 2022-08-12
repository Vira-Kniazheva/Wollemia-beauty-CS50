class HairList {
    constructor() {
        this.container = document.querySelector('.hair-container');
        this.hairService = new HairService();
        this.renderHair();
    }
    async renderHair() {
        let hairListDomString = '';
        const hair = await this.hairService.getHair();
        hair.forEach(hair => {
            hairListDomString += this.createHairDomString(hair);
        });
        this.container.innerHTML = hairListDomString;
        this.addEventListeners();
    }
    createHairDomString(hair) {
        return `<div class="container">
              <div class="box">
                <img src="../img/${hair.image}" alt="${hair.name}" />
                <h4 class="name">${hair.name}</h4>
                <p class="description">${hair.description}</p>
                <h5 class="price">${hair.price}</h5>
                <div class="cart">
                  <a href="#"><i class="bx bx-cart" data-id = ${hair.id}></i></a>
                </div>
              </div>
            </div>`;
    }
    addEventListeners() {
        document.querySelectorAll('.bx-cart').forEach(btn => {
            btn.addEventListener('click', this.showHairInfo.bind(this));
        });
    }
    async showHairInfo(event) {
        const id = event.target.dataset.id;
        const hair = await this.hairService.getHairById(id);
        const modal = document.querySelector('#shop');
        modal.querySelector('.box').innerHTML = hair.name;
    }
}
new HairList();