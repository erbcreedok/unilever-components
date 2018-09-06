import {Door, DoorInterface} from './door.model';
import {Status, StatusInterface} from './status.model';
import {Employee, EmployeeInterface} from './employee.model';
import {Item, ItemInterface} from './item.model';

export interface TaskInterface {
    id: number;
    title: string;
    status: StatusInterface;
    start_date: Date;
    end_date: Date;
    door: DoorInterface;
    checking: EmployeeInterface;
    doing: EmployeeInterface;
    items: ItemInterface[];
}

export class Task {

    public id: number;
    public title: string;
    public status: Status;
    public startDate: Date;
    public endDate: Date;
    public door: Door;
    public checking: Employee;
    public doing: Employee;
    public items: Item[];

    constructor(task: TaskInterface) {
        this.setTask(task);
    }

    public setTask(task: TaskInterface): Task {
        this.id = task.id;
        this.title = task.title;
        this.status = new Status(task.status);
        this.startDate = task.start_date;
        this.endDate = task.end_date;
        this.checking = new Employee(task.checking);
        this.doing = new Employee(task.doing);
        this.door = new Door(task.door);
        this.items = [];
        task.items.forEach(i => this.items.push(new Item(i)))
        return this;
    }

    public getTaskInterface(): TaskInterface {
        const items: ItemInterface[] = this.items.map(i => i.getItemInterface());
        return {
            id: this.id,
            title: this.title,
            status: this.status.getStatusInterface(),
            start_date: this.startDate,
            end_date: this.endDate,
            checking: this.checking.getEmployeeInterface(),
            doing: this.doing.getEmployeeInterface(),
            door: this.door.getDoorInterface(),
            items: items,
        };
    }

    public getTaskClone(): Task {
        return new Task(this.getTaskInterface());
    }
}
