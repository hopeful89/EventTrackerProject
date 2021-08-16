
export class Contact {

  id:number;
  firstName: string;
  email: string;
  lastName: string;
  phoneNumber: number;

  constructor(
    id:number = 0,
    firstName:string = '',
    email: string = '',
    lastName:string = '',
    number: number = 0
  ){
    this.id = id;
    this.firstName = firstName;
    this.email = email;
    this.lastName = lastName;
    this.phoneNumber = number;
  }
}
