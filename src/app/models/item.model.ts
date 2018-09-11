import {Product, ProductInterface} from './product.model';
import {Promo, PromoInterface} from './promo.model';
import {CommentInterface, Comment} from './comment.model';
export interface ItemInterface {
    id: number;
    promo: PromoInterface;
    product: ProductInterface;
    completed: number;
    type: number;
    comments: CommentInterface[];
}

export class Item {
    public id: number;
    public promo: Promo;
    public product: Product;
    public completed: number;
    public type: number;
    public comments: Comment[];

    constructor (item: ItemInterface) {
        this.setItem(item);
    }

    public setItem(item: ItemInterface): Item {
        if (!item) {
            return this;
        }
        this.id = item.id;
        this.promo = new Promo(item.promo);
        this.product = new Product(item.product);
        this.completed = item.completed;
        this.type = item.type;
        this.comments = [];
        item.comments.forEach(c => this.comments.push(new Comment(c)));
        return this;
    }

    public getItemInterface(): ItemInterface {
        const comments: CommentInterface[] = this.comments.map(c => c.getCommentInterface());
        return {
            id: this.id,
            promo: this.promo.getPromoInterface(),
            product: this.product.getProductInterface(),
            completed: this.completed,
            type: this.type,
            comments: comments,
        };
    }
}