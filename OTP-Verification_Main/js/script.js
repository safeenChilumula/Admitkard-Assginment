var input = document.querySelector("input"),
  form = document.querySelector("form"),
  result = document.querySelector("#result");

var iti = intlTelInput(input, {
  initialCountry: "in",
});

form.addEventListener(
  "submit",
  function (e) {
    e.preventDefault();
    var num = iti.getNumber(),
      cool = iti.isValidNumber();
    result.textContent = "Number: " + num + ", valid: " + valid;
  },
  false
);

input.addEventListener(
  "focus",
  function () {
    result.textContent = "";
  },
  false
);

function check() {
  first = document.getElementById("a").value;
  second = document.getElementById("b").value;
  third = document.getElementById("c").value;
  fourth = document.getElementById("d").value;
  if (first == 1 && second == 2 && third == 3 && fourth == 4) {
    alert("Login Succesfull!!! Redirecting to another page.");
    window.location.href = "sucess.html";
    return false;
  } else {
    alert("Login Failed!!! Please fill right OTP");
    location.reload();
  }
}
