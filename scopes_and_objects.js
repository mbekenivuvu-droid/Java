let globalCount = 9;

function localScope() {
  let localCount = 7;

  console.log("Inside function, localcount =", localCount);
  console.log("Inside function, globalcount =", globalCount);
}

localScope(); 

function modifyBoth() {
  globalCount += 11;
  let localCount = 13;
  localCount += 17;

  console.log("Inside modifyBoth, globalCount =", globalCount)
 console.log("Inside modifyBoth, localCount =", localCount)
}

localScope();
modifyBoth();

console.log("Outside functions, globalCount =", globalCount)

function Student(first, last, age, course) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.course = course;
}

let student1 = new Student("Anda", "Zantsi", 22, "Hospitality Management")

let student2 = new Student("Brian", "Bryne", 25, "Automotive Engineering")

let student3 = new Student("Cial", "Hendricks", 20, "Construction Management")

let student4 = new Student("Davide", "Rowland", 25, "Education")

let student5 = new Student("Entle", "Bunu", 22, "Film Studies")

let student6 = new Student("Fredrick", "Hendricks", 23, "Creative Writing")

let student7 = new Student("George", "Carr", 22, "Data Science")

console.log(student1, student2, student3, student4, student5, student6, student7) 

const person = {
  name: "Vuyolwethu",
  surname: "Mbekeni",
  age: 19,
  contact: { 
    email: "msomethingu@gmail.com",
    phone: "060-987-1234"
  },
 personMe: function() {
  return `I am ${this.name} ${this.surname} and I am ${this.age} years old. You can contact me at ${this.contact.email} or ${this.contact.phone}.`
}
};
console.log(person.personMe());