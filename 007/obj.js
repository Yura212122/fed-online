class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    getAllinfo(){
    console.log( `name ${this.name} have ${this.age}`);

    }
    sayHello(){
        console.log(`Hello ${this.name}`)
    }
}
let user = new Person(`john`, `20`);
console.log(user);
user.getAllinfo();
user.sayHello();
class Student extends Person{
constructor(name, age,studentId){
    super(name,age);
    this.studentId = studentId;
}
 getStudentinfo(){
    console.log(`${this.name} ${this.studentId}`)
 }
}
let student = new Student(`john`, `20`, `learn phisics`)
console.log(student);
    student.getStudentinfo();
    student.sayHello();
