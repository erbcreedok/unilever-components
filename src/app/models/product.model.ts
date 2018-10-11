import {Subcategory, SubcategoryInterface} from './subcategory.model';
import {Brand, BrandInterface} from './brand.model';
export interface ProductInterface {
    id: number;
    name: string;
    subcategory: SubcategoryInterface;
    subbrand: number;
    brand: BrandInterface,
    is_food: boolean;
}

export class Product {
    public id: number;
    public name: string;
    public subcategory: Subcategory;
    public brand: Brand;
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
        this.subcategory = new Subcategory(product.subcategory);
        this.subbrand = product.subbrand;
        this.brand = new Brand(product.brand);
        this.isFood = product.is_food;
        return this;
    }

    public getProductInterface(): ProductInterface {
        return {
            id: this.id,
            name: this.name,
            subcategory: this.subcategory ? this.subcategory.getSubcategoryInterface() : null,
            subbrand: this.subbrand,
            brand: this.brand ? this.brand.getBrandInterface() : null,
            is_food: this.isFood,
        };
    }
}
