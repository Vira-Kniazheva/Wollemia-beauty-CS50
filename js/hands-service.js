class HandsService {
    constructor() {
        if (!HandsService._intance) HandsService._intance = this
        return HandsService._intance;
    }

    async getHands() {
        if (!this.hands) {
            this.hands = await (await fetch('../api/hands.json')).json();
        }
        return this.hands;
    }

    async getHandsById(id) {
        const hands = await this.getHands();
        return hands.find(hands => hands.id === id);
    }
}