import { Contact } from "./contact";
import { Status } from "./status";

export class Application {

  id: number;
  name: string;
  userId: number;
  applyDate?: string;
  deadline?: string;
  linkToJob: string;
  description: string;
  location: string;
  salary: number;
  interviewDate?: string;
  jobTitle: string;
  status: Status;
  contacts: Contact[];

  constructor(
    id: number = 0,
    name: string = '',
    userId: number = 0,
    applyDate: string = '',
    deadline: string = '',
    linkToJob: string = '',
    description: string = '',
    location: string = '',
    salary: number = 0,
    interviewDate: string = '',
    jobTitle: string = '',
    status: Status = new Status(),
    contacts:Contact[] = []
  ) {
    this.id = id;
    this.name = name;
    this.userId = userId;
    this.applyDate = applyDate,
    this.deadline = deadline,
    this.linkToJob = linkToJob,
    this.description = description,
    this.location = location,
    this.salary = salary,
    this.interviewDate = interviewDate,
    this.jobTitle = jobTitle,
    this.status = status;
    this.contacts = contacts;
  }


}
