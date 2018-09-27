export interface StatusInterface {
    value: number;
    display: string;
}
export class Status {
    public value: number;
    public display: string;

    constructor(status: StatusInterface) {
        this.setStatus(status);
    }

    public setStatus(status: StatusInterface): Status {
        if (!status) {
            return this;
        }
        this.value = status.value;
        this.display = status.display;
        return this;
    }

    public getStatusInterface(): StatusInterface {
        return {
            value: this.value,
            display: this.display
        };
    }
}
