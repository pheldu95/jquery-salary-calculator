$(document).ready(readyNow);

function readyNow(){
  $('#submit').on('click', addEmployee);
  $('#employeeTable').on('click', '#deleteButton', deleteRow);
}

let totalSalary = 0;
//let rowNum = 0;
//let employeeArray = [];
function addEmployee(){
  let first = $ ('#firstNameInput').val();
  let last = $ ('#lastNameInput').val();
  let idNum = $ ('#idInput').val();
  let jobTitle = $ ('#titleInput').val();
  let annualSal = $ ('#annualSalaryInput').val();
  if(  first.length === 0 || last.length === 0 ||
    idNum.length === 0 || jobTitle.length === 0
    || annualSal.length === 0){ //makes it so the inputs are not appended to the dom if first name is left blank
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
  $('#employeeTable').append(`<tr id = rowNum><td>${first}</td><td>${last}</td><td>${idNum}</td><td>${jobTitle}</td><td id = 'annualSalID'>${annualSal}</td><td><button id = "deleteButton">delete</button></td></tr>`);
  if(isNaN(annualSal) === false){ //checks to see if the salary entered is a number or not. if it isn't a number, then nothing will be done with the total salary. if it is, then it will be added
    annualSal = parseInt(annualSal);
    totalSalary += annualSal;
    $(".total").text(totalSalary);
  }
  //rowNum++;
  //console.log(rowNum);
}
function deleteRow(){
  let subtractSal = $(this).closest('tr').children('#annualSalID').val(); //trying to target the salary of the closest employee
  console.log(subtractSal);
  console.log(totalSalary);
  totalSalary -= subtractSal;
  console.log(totalSalary);
  $(".total").text(totalSalary);
  $(this).parent().parent().remove();

}
