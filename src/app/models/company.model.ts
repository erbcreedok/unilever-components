export interface CompanyInterface {
    id: number;
    name: string;
}

export class Company {
    public id: number;
    public name: string;

    constructor(company: CompanyInterface | Company) {
        this.setCompany(company);
    }

    public setCompany(company: CompanyInterface | Company): Company {
        if (!company) {
            return this;
        }
        this.id = company.id;
        this.name = company.name;
        return this;
    }

    public getCompanyInterface(): CompanyInterface {
        return {
            id: this.id,
            name: this.name
        };
    }
}
