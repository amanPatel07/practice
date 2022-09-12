export class Department {
    public id: number;
    public departmentName: string;
    public employee: EmployeeDetails[];
    public leadName: string;
    constructor(
        id: number,
        departmentName: string,
        employee: EmployeeDetails[],
        leadName: string
    ){
        this.id = id;
        this.departmentName = departmentName;
        this.employee = employee;
        this.leadName = leadName;
    }
}
export class EmployeeDetails {
    public employeeId: number;
    public employeeName: string;
    public designation: string;
    public role: string;
    public staffProjectId: StaffedProject[];
    public ismoduleLead: string;
    public contact: number;
    public email: string;
    constructor(
        employeeId: number,
        employeeName: string,
        designation: string,
        role: string,
        staffProjectId: StaffedProject[],
        ismoduleLead: string,
        contact: number,
        email: string,
    ) {
        this.employeeId = employeeId;
        this.employeeName = employeeName;
        this.designation = designation;
        this.role = role;
        this.staffProjectId = staffProjectId;
        this.ismoduleLead = ismoduleLead;
        this.contact = contact;
        this.email = email
    }
}

export class StaffedProject {
    public projectId: number;
    public hourSpend: number;
    constructor(
        projectId: number,
        hourSpend: number
    ) {
        this.projectId = projectId;
        this.hourSpend = hourSpend
    }
}