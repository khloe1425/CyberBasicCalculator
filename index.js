var num1 = document.querySelector(".container #num1");
var num2 = document.querySelector(".container #num2");
var operatorEl = document.querySelectorAll(".container #opr");
var num1ErrorEl = document.querySelector(".num1-err");
var num2ErrorEl = document.querySelector(".num2-err");
var oprErrorEl = document.querySelector(".opr-err");

function calculate() {
  /* ? dấu , dấu < hay <= */
  for (let i = 0; i < operatorEl.length; i++) {
    if (operatorEl[i].checked) {
      var opr = operatorEl[i].value;
    }
  }
  // Validation
  /* ? || or && , ==true */
  if (num1.value == "" || isNaN(num1.value)) {
    num1ErrorEl.innerHTML = "Please provide a valid number";
  } else {
    num1ErrorEl.innerHTML = "";
    var num1Status = true;
  }
  if (num2.value == "" || isNaN(num2.value)) {
    num2ErrorEl.innerHTML = "Please provide a valid number";
  } else {
    num2ErrorEl.innerHTML = "";
    var num2Status = true;
  }
  if (opr == null) {
    oprErrorEl.innerHTML = "Please provide an operation";
  } else {
    oprErrorEl.innerHTML = "";
    var oprStatus = true;
  }

  // Calculation
  if (num1Status && num2Status && oprStatus) {
    switch (opr) {
      case "+":
        // ? parseInt
        var result = parseInt(num1.value) + parseInt(num2.value);
        break;
      case "-":
        var result = parseInt(num1.value) - parseInt(num2.value);
        break;
      case "*":
        var result = parseInt(num1.value) * parseInt(num2.value);
        break;
      case "/":
        var result = parseInt(num1.value) / parseInt(num2.value);
        break;
        // ? default
    }
    var resultEl = document.createElement("p");
    resultEl.innerHTML = `${num1.value} ${opr} ${num2.value} = ${result}`;
  }
  document.querySelector(".container").appendChild(resultEl);
}
