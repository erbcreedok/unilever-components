import {Company, CompanyInterface} from './company.model';
import {City, CityInterface} from './city.model';

export interface DoorInterface {
    id: number;
    name: string;
    company: CompanyInterface;
    city: CityInterface;
    address: string;
}

export class Door {
    public id: number;
    public name: string;
    public company: Company;
    public city: City;
    public address: string;

    constructor(door: DoorInterface | Door) {
        this.setDoor(door);
    }

    public setDoor(door: DoorInterface | Door): Door {
        this.id = door.id;
        this.name = door.name;
        this.company = new Company(door.company);
        this.city = new City(door.city);
        this.address = door.address;
        return this;
    }

    public getDoorInterface(): DoorInterface {
        return {
            id: this.id,
            name: this.name,
            company: this.company.getCompanyInterface(),
            city: this.city.getCityInterface(),
            address: this.address,
        };
    }
}