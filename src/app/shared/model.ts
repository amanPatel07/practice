export class Project {
    public id: number;
    public projectName: string;
    public projectStatus: string;
    public projectDesc: string;
    public projectLeadId: number;
    public projectModules: ProjectModule[]
    constructor(
        id: number,
        projectName: string,
        projectStatus: string,
        projectDesc: string,
        projectLeadId: number,
        projectModules: ProjectModule[]
    ) {
        this.id = id;
        this.projectName = projectName;
        this.projectStatus = projectStatus;
        this.projectDesc = projectDesc;
        this.projectLeadId = projectLeadId;
        this.projectModules = projectModules
    }
}

export class ProjectModule {
    public id: number;
    public moduleName: string;
    public moduleLeadId: ModuleLeadId[];
    constructor(
        id: number,
        moduleName: string,
        moduleLeadId: ModuleLeadId[]
    ) {
        this.id = id;
        this.moduleName = moduleName;
        this.moduleLeadId = moduleLeadId;
    }
}

export class ModuleLeadId {
    id: number;
    constructor(id: number) {
        this.id = id
    }
}

export class Department {
    public id: number;
    public departmentName: string;
    public employee: Employee[];
    public leadName: string;
    constructor(
        id: number,
        departmentName: string,
        employee: Employee[],
        leadName: string
    ) {
        this.id = id;
        this.departmentName = departmentName;
        this.employee = employee;
        this.leadName = leadName;
        this.employee = employee;
    }
}

export class Employee {
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
    public joinDate: string;
    public comment: string;
    public hourSpend: number;
    constructor(
        projectId: number,
        joinDate: string,
        comment: string,
        hourSpend: number
    ) {
        this.projectId = projectId;
        this.joinDate = joinDate;
        this.comment = comment;
        this.hourSpend = hourSpend
    }
}
