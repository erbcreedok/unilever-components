export interface EmployeeInterface {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    tasks_info: {
        all: number,
        in_process: number,
        recheck: number,
        done: number,
        not_done: number
    };
    position: {
        value: number,
        display: string,
    };
    formal_position: string;
    department: string;
    brands: any[];
    doors: any[];
    phone: string;
    avatar: string;
    status: {
        value: number,
        display: string
    };
}

export class Employee {
    public id: number;
    public email: string;
    public firstName: string;
    public lastName: string;
    public tasksInfo: {
        all: number,
        done: number,
        notDone: number
        inProcess: number,
        recheck: number,
    };
    public position: {
        value: number,
        display: string,
    };
    public formalPosition: string;
    public department: string;
    public brands: any[];
    public doors: any[];
    public phone: string;
    public avatar: string;
    public status: {
        value: number,
        display: string
    };

    constructor(employee: EmployeeInterface) {
        return employee ? this.setEmployee(employee) : null;
    }

    public setEmployee(employee: EmployeeInterface): Employee {
        if (!employee) {
            return this;
        }
        this.id = employee.id;
        this.email = employee.email;
        this.firstName = employee.first_name;
        this.lastName = employee.last_name;
        this.tasksInfo = employee.tasks_info ? {
            all: employee.tasks_info.all,
            done: employee.tasks_info.done,
            inProcess: employee.tasks_info.in_process,
            recheck: employee.tasks_info.recheck,
            notDone: employee.tasks_info.not_done,
        } : null;
        this.position = employee.position;
        this.formalPosition = employee.formal_position;
        this.department = employee.department;
        this.brands = employee.brands;
        this.doors = employee.doors;
        this.phone = employee.phone;
        this.avatar = employee.avatar;
        this.status = employee.status;
        return this;
    }

    public getEmployeeClone(): Employee {
        return new Employee(this.getEmployeeInterface());
    }

    public getEmployeeInterface(): EmployeeInterface {
        return {
            id: this.id,
            email: this.email,
            first_name: this.firstName,
            last_name: this.lastName,
            tasks_info: this.tasksInfo ? {
                all: this.tasksInfo.all,
                done: this.tasksInfo.done,
                in_process: this.tasksInfo.inProcess,
                recheck: this.tasksInfo.recheck,
                not_done: this.tasksInfo.notDone
            } : null,
            position: this.position,
            formal_position: this.formalPosition,
            department: this.department,
            brands: this.brands,
            doors: this.doors,
            phone: this.phone,
            avatar: this.avatar,
            status: this.status
        };
    }
}
