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
    return 'Today we are learning about {subject}';
  }
  grade(subject){
    return '{student.name} receives a perfect score on {subject}';
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
    return `favSubjects​​​`;
  }
  PRAssignment(subject){
    return `${student.name} has submitted a PR for {subject}`;
  }
  sprintChallenge(subject){
    return `${student.name} has begun spring challenge on {subject}`;
  }
}

// 4) Project Manager class
class ProjectManager extends Instructor{
  constructor(attr){
    super(attr);
    this.gradClassName = attr.gradClassName;
    this.favInstructor = attr.favInstructor;
  }
  standup(channel){
    return `{name} announces to {channel}, @channel standy times!​​​​​`;
  }
  debugsCode(name, subject){
    return `{name} debugs {student.name}'s code on {subject}`;
  }
}

// 1a: person classes
const aaron = new Person({
  name: 'Aaron',
  location: 'Anchorage',
  age: 25,
  gender: 'male',
  favLanguage: 'Python',
  specialty: 'Back-end',
  catchPhrase: `My code can handle AI tech, what can yours do?`
});

const brittany = new Person({
  name: 'Brittany',
  location: 'San Jose',
  age: 33,
  gender: 'female',
  favLanguage: 'PHP',
  specialty: 'Back-end',
  catchPhrase: `Stats are where it's at!`
});

const colin = new Person({
  name: 'Colin',
  location: 'Anchorage',
  age: 17,
  gender: 'male',
  favLanguage: 'none',
  specialty: 'none',
  catchPhrase: `Coding is boring, let's go play some football!`
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














const Coleen = new Person({
  name: 'Coleen',
  location: 'Boston',
  age: 20,
  gender: 'female',
  favLanguage: 'Ruby',
  specialty: 'design',
  catchPhrase: `Get on the rails!`
});

// 2a: Instructor classes
const Alphred = new Person({
  name: 'Alphred',
  location: 'Gotham',
  age: 54,
  gender: 'male',
  favLanguage: 'none',
  specialty: 'Butler',
  catchPhrase: `Anything for you Mr. Wayne`
});

const Bridget = new Person({
  name: 'Bridget',
  location: 'Buffalo',
  age: 14,
  gender: 'female',
  favLanguage: 'HTML',
  specialty: 'being a passionate programmer as a kid',
  catchPhrase: `One day, I'll create my own computer language!`
});

const Coleen = new Person({
  name: 'Coleen',
  location: 'Boston',
  age: 20,
  gender: 'female',
  favLanguage: 'Ruby',
  specialty: 'design',
  catchPhrase: `Get on the rails!`
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






 // console.log(mage.createdAt); // Today's date
 // console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
 // console.log(swordsman.healthPoints); // 15
 // console.log(mage.name); // Bruce
 // console.log(swordsman.team); // The Round Table
 // console.log(mage.weapons); // Staff of Shamalama
 // console.log(archer.language); // Elvish
 // console.log(archer.greet()); // Lilith offers a greeting in Elvish.
 // console.log(mage.takeDamage()); // Bruce took damage.
 // console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
