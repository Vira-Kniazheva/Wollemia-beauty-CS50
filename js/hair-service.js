class HairService {
    constructor() {
        if (!HairService._intance) HairService._intance = this
        return HairService._intance;
    }

    async getHair() {
        if (!this.hair) {
            this.hair = await (await fetch('../api/hair.json')).json();
        }
        return this.hair;
    }

    async getHairById(id) {
        const hair = await this.getHair();
        return hair.find(hair => hair.id === id);
    }
}