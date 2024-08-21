// data types
var str = 'Hello Typescript';
var num = 42;
var isActive = true;
var strArray = ['H', 'e', 'l', 'l', 'o'];
var numArray = [1, 1, 2, 3, 5, 8];
// functions
function logInfo(name, age) {
    console.log("Log Info: ".concat(name, ", ").concat(age));
}
logInfo('Alex', 27);
function calc(a, b) {
    if (typeof b === 'string') {
        b = +b;
    }
    return a + b;
}
console.log(calc(5, '45'));
// classes
var Server = /** @class */ (function () {
    function Server(name, ip) {
        this.name = name;
        this.ip = ip;
        this.status = 'working';
    }
    Server.prototype.turnOn = function () {
        this.status = 'working';
    };
    Server.prototype.turnOff = function () {
        this.status = 'offline';
    };
    Server.prototype.getStatus = function () {
        return this.status;
    };
    Server.VERSION = '1.0';
    return Server;
}());
var server = new Server('AWS', 1234);
var user = {
    name: 'Alex',
    age: 27,
    logInfo: function () {
        console.log(this.name + '  ' + this.age);
    }
};
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.sayHello = function () {
        console.log(this.name + ' Hello!');
    };
    return User;
}());
// generic types
var array = [1, 2, 3];
var users = [
    { id: 1, name: 'Alex', age: 27 },
    { id: 2, name: 'Oliver', age: 30 },
];
var users2 = [
    { id: 1, name: 'Alex', age: 27 },
    { id: 2, name: 'Oliver', age: 30 },
];
