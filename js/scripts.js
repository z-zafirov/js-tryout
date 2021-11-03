function calc(operation) { // Function to do the calculations
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let c = null;
    let o = "";
    if (operation == "addition") {             // If the operation is addition
        c = a + b;
        o = "+";
    }
    else if (operation == "subtraction") {     // If the operation is subtraction
        c = a - b;
        o = "-";
    }
    else if (operation == "mutliply") {        // If the operation is multiplication
        c = a * b;
        o = "*";
    }
    else if (operation == "divide") {          // If the operation is to divide and show an error if dividing value is zero
      if (b==0) {
          o = "Error: can't divide to 0 ";
      } else {
          c = a / b;
          o = "/";
      }
    }
    document.getElementById("action").innerHTML = o;
    document.getElementById("c").value = c;
  }
  
function cleanup() {  // Function to cleanup the inputs
    document.getElementById("action").innerHTML = "...";
    document.getElementById("a").value = null;
    document.getElementById("b").value = null;
    document.getElementById("c").value = null;
  }