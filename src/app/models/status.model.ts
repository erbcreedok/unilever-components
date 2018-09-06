export interface StatusInterface {
    id: number;
    name: string;
}
export class Status {
    public id: number;
    public name: string;

    constructor(status: StatusInterface) {
        this.setStatus(status);
    }

    public setStatus(status: StatusInterface): Status {
        this.id = status.id;
        this.name = status.name;
        return this;
    }

    public getStatusInterface(): StatusInterface {
        return {
            id: this.id,
            name: this.name
        };
    }
}
