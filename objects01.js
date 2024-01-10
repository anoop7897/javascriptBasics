const Student ={
    name:"Anoop Maurya",
    age:24,
    address:"Raebareli",
    pin:"229127"
}
delete Student.pin;
Student.district = 'Raebareli';
console.log('age' in Student);
console.log('district' in Student);
console.log(Student);