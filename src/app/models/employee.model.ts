export interface EmployeeInterface {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    tasks_info: {
        all: number,
        completed: number,
        in_progress: number,
        recheck: number,
        fix: number
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
    avatar: {
        url: string
    };
}

export class Employee {
    public id: number;
    public email: string;
    public firstName: string;
    public lastName: string;
    public tasksInfo: {
        all: number,
        completed: number,
        inProgress: number,
        recheck: number,
        fix: number
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
    public avatar: {
        url: string
    };

    constructor(employee: EmployeeInterface) {
        return employee ? this.setEmployee(employee) : null;
    }

    public setEmployee(employee: EmployeeInterface): Employee {
        this.id = employee.id;
        this.email = employee.email;
        this.firstName = employee.first_name;
        this.lastName = employee.last_name;
        this.tasksInfo = {
            all: employee.tasks_info.all,
            completed: employee.tasks_info.completed,
            inProgress: employee.tasks_info.in_progress,
            recheck: employee.tasks_info.recheck,
            fix: employee.tasks_info.fix,
        };
        this.position = employee.position;
        this.formalPosition = employee.formal_position;
        this.department = employee.department;
        this.brands = employee.brands;
        this.doors = employee.doors;
        this.phone = employee.phone;
        this.avatar = employee.avatar;
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
            tasks_info: {
                all: this.tasksInfo.all,
                completed: this.tasksInfo.completed,
                in_progress: this.tasksInfo.inProgress,
                recheck: this.tasksInfo.recheck,
                fix: this.tasksInfo.fix
            },
            position: this.position,
            formal_position: this.formalPosition,
            department: this.department,
            brands: this.brands,
            doors: this.doors,
            phone: this.phone,
            avatar: this.avatar
        };
    }
}
