/*jshint esversion: 6 */

// CODE here for your Lambda Classes

// 1)  Person class
class Person{
  constructor(attr){
    this.name = attr.name;
    this.age = attr.age;
    this.location = attr.location;
    this.gender = attr.gender;
  }
  speak(){
    return `Hello my name is ${this.name} and I am from ${this.location}`;
  }
}

// 2)  Instructor class
class Instructor extends Person{
  constructor(attr){
    super(attr);
    // console.log(attr);
    this.specialty = attr.specialty;
    this.favLanguage = attr.favLanguage;
    this.catchPhrase = attr.catchPhrase;
  }
  demo(subject){
    return `Today we are learning about ${subject}`;
  }
  grade(Students, subject){
    return `${Students.name} receives a perfect score on ${subject}`;
  }
}

// 3)  Student class
class Student extends Person{
  constructor(attr){
    super(attr);
    // console.log(attr);
    this.previousBackground = attr.previousBackground;
    this.className = attr.className;
    this.favSubjects = attr.favSubjects;
  }
  listSubjects(){
    return `${this.favSubjects}​​​`;
  }
  PRAssignment(subject){
    return `${this.name} has submitted a PR for ${subject}`;
  }
  sprintChallenge(subject){
    return `${this.name} has begun spring challenge on ${subject}`;
  }
}

// 4) Project Manager class
class ProjectManager extends Instructor{
  constructor(attr){
    super(attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }
  standUp(channel){
    return `${this.name} announces to ${channel}, @channel standy times!​​​​​`;
  }
  debugsCode(student, subject){
    return `${this.name} debugs ${student}'s code on ${subject}`;
  }
}

// 1a: person classes
const aaron = new Person({
  name: 'Aaron',
  location: 'Anchorage',
  age: 25,
  gender: 'male',
});

const brittany = new Person({
  name: 'Brittany',
  location: 'San Jose',
  age: 33,
  gender: 'female',
});

const colin = new Person({
  name: 'Colin',
  location: 'Anchorage',
  age: 17,
  gender: 'male',
});

// 2a: Instructor classes
const alphred = new Instructor({
  name: 'Alphred',
  location: 'Gotham',
  age: 54,
  gender: 'male',
  favLanguage: 'none',
  specialty: 'Butler',
  catchPhrase: `Anything for you Mr. Wayne`
});

const bridget = new Instructor({
  name: 'Bridget',
  location: 'Buffalo',
  age: 14,
  gender: 'female',
  favLanguage: 'HTML',
  specialty: 'being a passionate programmer as a kid',
  catchPhrase: `One day, I'll create my own computer language!`
});

const fred = new Instructor({
  name: 'Fred',
  location: 'Bedrock',
  age: 37,
  gender: 'male',
  favLanguage: 'JavaScript',
  specialty: 'Front-end',
  catchPhrase: `Don't forget the homies`
});

// 3a: Student classes
const alyssa = new Student({
  name: 'Alyssa',
  location: 'Jacksonville',
  age: 49,
  gender: 'female',
  className: "CS132",
  previousBackground: "Banking",
  favSubjects: ["Horseback Riding", " Baking", " Concerts"]
});

const brad = new Student({
  name: 'Brad',
  location: 'Chicago',
  age: 72,
  gender: 'male',
  className: "CS204",
  previousBackground: "Chess Master",
  favSubjects: ["Price is Right", " Jello", " Reading"]
});

const coleen = new Student({
  name: 'Coleen',
  location: 'Boston',
  age: 20,
  gender: 'female',
  className: "P110",
  previousBackground: "Biology",
  favSubjects: ["Science", " Hiking", " Dancing"]
});

// 4a: Project Manager classes
const angie = new ProjectManager({
  name: 'Angie',
  location: 'Toronto',
  age: 27,
  gender: 'female',
  favLanguage: 'C++',
  specialty: 'Logic',
  catchPhrase: `Do I really understand this language?`,
  gradClassName: "CS112",
  favInstructor: "Fred"
});

const branden = new ProjectManager({
  name: 'Branden',
  location: 'Minneaplois',
  age: 23,
  gender: 'male',
  favLanguage: 'Java',
  specialty: 'Syntax and color scheme',
  catchPhrase: `You want an app! I'll give you an app!`,
  gradClassName: "CS330",
  favInstructor: "Bridget"
});

const christian = new ProjectManager({
  name: 'Christian',
  location: 'Dallas',
  age: 35,
  gender: 'male',
  favLanguage: 'guns',
  specialty: 'shooting',
  catchPhrase: `what's more powerful than a gun?`,
  gradClassName: "CS720",
  favInstructor: "Alphred"
});

//person challenges
console.log(aaron.name);
console.log(brittany.location);
console.log(colin.age);
console.log(aaron.gender);
console.log(brittany.speak());
console.log("");

// instructor challenges
console.log(alphred.specialty);
console.log(bridget.favLanguage);
console.log(fred.catchPhrase);
console.log(alphred.demo("Math"));
console.log(bridget.grade(brad, "Computer Science"));
console.log("");

//sudent challenges
console.log(alyssa.previousBackground);
console.log(brad.className);
console.log(coleen.favSubjects);
console.log(alyssa.listSubjects());
console.log(brad.PRAssignment("Programming"));
console.log(coleen.sprintChallenge("fecal examinations"));
console.log("");

// Project manager challenges
console.log(angie.gradClassName);
console.log(branden.favInstructor);
console.log(christian.standUp("Hello World"));
console.log(angie.debugsCode("Alyssa", "Elf Hunting"));
