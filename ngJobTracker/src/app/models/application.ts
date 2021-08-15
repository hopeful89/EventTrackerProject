import { Status } from "./status";

export class Application {

  id: number;
  name: string;
  userId: number;
  applyDate: string | null;
  deadline: string  | null;
  linkToJob: string;
  description: string;
  location: string;
  salary: number;
  interviewDate: string | null;
  jobTitle: string;
  status: Status;

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
    status: Status = new Status()
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
  }


}
