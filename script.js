$(document).ready(readyNow);

function readyNow(){
  $('#submit').on('click', addEmployee);
  $('#employeeTable').on('click', '#deleteButton', deleteRow);
}

let totalMonthlySalary = 0;

function addEmployee(){
  let first = $ ('#firstNameInput').val();
  let last = $ ('#lastNameInput').val();
  let idNum = $ ('#idInput').val();
  let jobTitle = $ ('#titleInput').val();
  let monthlySal = ($ ('#annualSalaryInput').val())/12;
  if(  first.length === 0 || last.length === 0 ||
    idNum.length === 0 || jobTitle.length === 0
    || monthlySal.length === 0){ //makes it so the inputs are not appended to the dom if first name is left blank
    return;
  }

  //employeeArray.push(employeeObject);
  $('#employeeTable').append(`<tr id = rowNum>
                                <td>${first}</td>
                                <td>${last}</td>
                                <td>${idNum}</td>
                                <td>${jobTitle}</td>
                                <td id = 'monthlySalID'>${monthlySal}</td>
                                <td><button id = "deleteButton">delete</button></td>
                              </tr>`);
  if(isNaN(monthlySal) === false){ //checks to see if the salary entered is a number or not. if it isn't a number, then nothing will be done with the total salary. if it is, then it will be added
    monthlySal = parseInt(monthlySal);
    totalMonthlySalary += monthlySal;
    $(".total").text(totalMonthlySalary);
  }
  if(totalMonthlySalary > 20000){
    $(".totalCounter").addClass("red");
  }
  else {
    $(".totalCounter").removeClass("red");
  }
  clearInputs();
}//end add employee
function deleteRow(){
  let subtractSal = $(this).parent().prev().text(); //trying to target the salary of the closest employee
  totalMonthlySalary -= subtractSal;
  if(totalMonthlySalary > 20000){
    $(".totalCounter").addClass("red");
  }
  else {
    $(".totalCounter").removeClass("red");
  }
  $(".total").text(totalMonthlySalary);
  $(this).parent().parent().remove();//removes the parent of the parent of the button. that is the <tr>. so the whole row is removed

}
//sets value of each input to an empty string. clears inputs
function clearInputs(){
  $ ('#firstNameInput').val('');
  $ ('#lastNameInput').val('');
  $ ('#idInput').val('');
  $ ('#titleInput').val('');
  $ ('#annualSalaryInput').val('');
}
