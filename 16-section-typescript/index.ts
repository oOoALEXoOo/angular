// data types

let str: string = 'Hello Typescript';
let num: number = 42;
let isActive: boolean = true;

let strArray: string[] = ['H', 'e', 'l', 'l', 'o'];
let numArray: Array<number> = [1, 1, 2, 3, 5, 8];

// functions

function logInfo(name: string, age: number): void {
  console.log(`Log Info: ${name}, ${age}`);
}

logInfo('Alex', 27);

function calc(a: number, b: number | string): number {
  if (typeof b === 'string') {
    b = +b;
  }

  return a + b;
}

console.log(calc(5, '45'));

// classes

class Server {
  static VERSION: string = '1.0';
  private status: string = 'working';

  constructor(public name: string, protected ip: number) {}

  public turnOn(): void {
    this.status = 'working';
  }

  public turnOff(): void {
    this.status = 'offline';
  }

  public getStatus(): string {
    return this.status;
  }
}

const server: Server = new Server('AWS', 1234);

// interfaces && objects

interface IUser {
  id?: any;
  age: number;
  name: string;
  logInfo?: () => void;
}

const user: IUser = {
  name: 'Alex',
  age: 27,
  logInfo() {
    console.log(this.name + '  ' + this.age);
  }
};

// interfaces && classes

interface SayHello {
  sayHello: () => void;
}

class User implements SayHello {
  constructor(private name: string, private age: number) {}

  sayHello(): void {
    console.log(this.name + ' Hello!');
  }
}

// generic types

const array: Array<number> = [1, 2, 3];

const users: Array<IUser> = [
  { id: 1, name: 'Alex', age: 27 },
  { id: 2, name: 'Oliver', age: 30 },
];

const users2: IUser[] = [
  { id: 1, name: 'Alex', age: 27 },
  { id: 2, name: 'Oliver', age: 30 },
];
