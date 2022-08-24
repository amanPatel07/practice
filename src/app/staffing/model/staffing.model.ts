export class StaffDetails {
    public developerName: string;
    public contactNumber: string;
    public email: string;
    public developerId: string;
    public designation: string;
    public firstForm: string;
    public projectName: string;
    public projectLead: string;
    public moduleLead: string;
    public description: string;
    public staffing: string;
    public secondForm: string;
    public frameWork: string;
    public cssFramework: string;
    public joinDate: string;
    public releaseDate: string;
    public status: string;
    public comment: string;
    public thirdForm: string
    constructor(
        developerName: string,
        contactNumber: string,
        email: string,
        developerId: string,
        designation: string,
        firstForm: string,
        projectName: string,
        projectLead: string,
        moduleLead: string,
        description: string,
        staffing: string,
        secondForm: string,
        frameWork: string,
        cssFramework: string,
        joinDate: string,
        releaseDate: string,
        status: string,
        comment: string,
        thirdForm: string
    ) {
        this.developerName = developerName;
        this.contactNumber = contactNumber;
        this.email = email;
        this.developerId = developerId;
        this.designation = designation;
        this.firstForm = firstForm;
        this.projectName = projectName;
        this.projectLead = projectLead;
        this.moduleLead = moduleLead;
        this.description = description;
        this.staffing = staffing;
        this.secondForm = secondForm;
        this.frameWork = frameWork;
        this.cssFramework = cssFramework;
        this.joinDate = joinDate;
        this.releaseDate = releaseDate;
        this.status = status;
        this.comment = comment;
        this.thirdForm = thirdForm;
    }
}