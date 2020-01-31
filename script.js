$(document).ready(readyNow);

function readyNow(){
  $('#submit').on('click', addEmployee);
}

let totalSalary = 0;
//let employeeArray = [];
function addEmployee(){
  let first = $ ('#firstNameInput').val();
  let last = $ ('#lastNameInput').val();
  let idNum = $ ('#idInput').val();
  let jobTitle = $ ('#titleInput').val();
  let annualSal = $ ('#annualSalaryInput').val();
  if(  first.length === 0){ //makes it so the inputs are not appended to the dom if first name is left blank
    return;
  }
  // let employeeObject = {
  //   firstName: first,
  //   lastName: last,
  //   id: idNum,
  //   title: jobTitle,
  //   annualSalary: annualSal
  // };
  //employeeArray.push(employeeObject);
  $('#employeeTable').append(`<tr><td>${first}</td><td>${last}</td><td>${idNum}</td><td>${jobTitle}</td><td>${annualSal}</td><td><button id = "deleteButton">delete</button></th></tr>`);
  if(isNaN(annualSal) === false){ //checks to see if the salary entered is a number or not. if it isn't a number, then nothing will be done with the total salary. if it is, then it will be added
    annualSal = parseInt(annualSal);
    totalSalary += annualSal;
    $(".total").text(totalSalary);
  }
}
