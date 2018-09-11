export interface ProductInterface {
    id: number;
    name: string;
    subcategory: number;
    subbrand: number;
    is_food: boolean;
}

export class Product {
    public id: number;
    public name: string;
    public subcategory: number;
    public subbrand: number;
    public isFood: boolean;

    constructor(product: ProductInterface) {
        this.setProduct(product);
    }

    public setProduct(product: ProductInterface): Product {
        if (!product) {
            return this;
        }
        this.id = product.id;
        this.name = product.name;
        this.subcategory = product.subcategory;
        this.subbrand = product.subbrand;
        this.isFood = product.is_food;
        return this;
    }

    public getProductInterface(): ProductInterface {
        return {
            id: this.id,
            name: this.name,
            subcategory: this.subcategory,
            subbrand: this.subbrand,
            is_food: this.isFood,
        };
    }
}
