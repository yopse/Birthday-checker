
var dateOfBirth = document.querySelector("#dateofbrith");

var luckyNumber = document.querySelector("#luckynumber");

var checkNumberButton = document.querySelector("#checknumber");

var outputBox = document.querySelector("#outputbox"); 


function compareValues(sum,luckyNumber)
{

    outputBox.style.color="007bff";
if(sum%luckyNumber===0)
{
   outputBox.innerText = "You Birthday is lucky";
}
else {
    
    outputBox.innerText = "You Birthday is not lucky";
}

}







function checkBirthDateIsLucky() {
  var dob = dateOfBirth.value;
  var sum = calculateSum(dob);
  
    if(sum&&dob)
   compareValues(sum,luckyNumber.value)
  
    else
    outputBox.innerHTML="Please Enter Both the Fields";

}

function calculateSum(dob) {
  var dob = dob.replaceAll("-", "");

  var sum = 0;

  for (let i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  return sum;
}

checkNumberButton.addEventListener("click", checkBirthDateIsLucky);

 