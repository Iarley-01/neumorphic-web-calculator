var keys = document.querySelectorAll("#calc span");
var operators = ["×", "-", "+", "÷"];
var decimalAdded = false;

for (var i = 0; i < keys.length; i++) {
  keys[i].onclick = function(e) {
    var input = document.querySelector(".display");
    var inputValue = input.innerHTML;
    var buttonValue = this.innerHTML;
    
    if(buttonValue == "C"){
      input.innerHTML = "";
      decimalAdded = false;
    } else if(buttonValue == "="){
      var equation = inputValue;
      var lastChar = equation[equation.length - 1];
      equation = equation.replace(/x/g, "*").replace(/÷/g, "/");
      
      if (operators.indexOf(lastChar) > -1 || lastChar == ".") equation = equation.replace(/.$/, "");
      
      if (equation) input.innerHTML = eval(equation);
      decimalAdded = false;
    } else if(operators.indexOf(buttonValue) > -1) {
      var lastChar = inputValue[inputValue.length - 1];
      
      if(inputValue != "" && operators.indexOf(lastChar) == -1) input.innerHTML += buttonValue;
      else if(buttonValue == "" && buttonValue == "-") input.innerHTML += buttonValue;
      
      if(operators.indexOf(lastChar) > -1 && inputValue.length > 1) {
        input.innerHTML = inputValue.replace(/.$/, buttonValue);
      }
      decimalAdded = false;
    } else if(buttonValue == ".") {
      if (!decimalAdded) {
        input.innerHTML += buttonValue;
        decimalAdded = true;
      }
    } else {
      input.innerHTML += buttonValue;
    }
    e.preventDefault();
  };
}

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);