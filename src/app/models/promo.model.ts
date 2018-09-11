export interface PromoInterface {
    id: number;
    type: number;
    producer: number;
    category: number;
    subbrand: number;
    discount: number;
    name: string;
    quantity: number;
    start_date: Date;
    end_date: Date;
}

export class Promo {
    public id: number;
    public type: number;
    public producer: number;
    public category: number;
    public subbrand: number;
    public discount: number;
    public name: string;
    public quantity: number;
    public startDate: Date;
    public endDate: Date;

    constructor(promo: PromoInterface) {
        this.setPromo(promo);
    }

    public setPromo(promo: PromoInterface): Promo {
        if (!promo) {
            return this;
        }
        this.id = promo.id;
        this.type = promo.type;
        this.producer = promo.producer;
        this.category = promo.category;
        this.subbrand = promo.subbrand;
        this.discount = promo.discount;
        this.name = promo.name;
        this.quantity = promo.quantity;
        this.startDate = promo.start_date;
        this.endDate = promo.end_date;
        return this;
    }

    public getPromoInterface(): PromoInterface {
        return {
            id: this.id,
            type: this.type,
            producer: this.producer,
            category: this.category,
            subbrand: this.subbrand,
            discount: this.discount,
            name: this.name,
            quantity: this.quantity,
            start_date: this.startDate,
            end_date: this.endDate
        }
    }

}