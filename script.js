/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map(student=>{
    if(student.marks>50) console.log(student);
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach(student=>{
    if(student.marks>50) console.log(student);
  });
}

function addData() {
  //Write your code here, just console.log

  let newData = {
    id: 4,
    name: "susan",
    age: 20,
    marks: 45
  };
  arr.push(newData);
  console.log(newData);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr = arr.filter(student =>{
    if(student.marks >= 50) return student;});
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    {id: 4, name: "Het", age: 22, marks: 70},
    {id: 5, name: "Gupta", age: 23, marks: 90},
    {id: 6, name: "Ram", age: 24, marks: 30}
  ];
  let concatenatedArr = arr.concat(newArr);
  console.log(concatenatedArr);
}


// PrintStudentsbyForEach();
// addData();
// removeFailedStudent();
// concatenateArray();