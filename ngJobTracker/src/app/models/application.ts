export class Application {
  id: number;
  name: string;
  userId: number;

  constructor(
    id: number = 0,
    name: string = '',
    userId: number = 0,
  ) {
    this.id = id;
    this.name = name;
    this.userId = userId;
  }
}
