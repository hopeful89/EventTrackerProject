export class User {
id: number;
username: string;
password: string;
email: string;
role: boolean;
enabled: boolean;

constructor(
id: number = 0,
username: string = '',
password: string = '',
role: boolean = false,
enabled: boolean = true,
email: string = ''
){
  this.id = 0,
  this.username = '',
  this.password = '',
  this.role = false,
  this.enabled = true
  this.email = email;
}

}
