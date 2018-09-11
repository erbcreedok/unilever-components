export interface CommentInterface {
    pk: number;
    body: string;
    img: string;
}

export class Comment {
    public pk: number;
    public body: string;
    public img: string;

    constructor(comment: CommentInterface | Comment) {
        this.setComment(comment);
    }

    public setComment(comment: CommentInterface | Comment): Comment {
        if (!comment) {
            return this;
        }
        this.pk = comment.pk;
        this.body = comment.body;
        this.img = comment.img;
        return this;
    }

    public getCommentInterface(): CommentInterface {
        return {
            pk: this.pk,
            body: this.body,
            img: this.img,
        };
    }
}
