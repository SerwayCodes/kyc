function myMenuFunction() {
    var i = document.getElementById("navMenu");

    if (i.className === "nav-menu") {
      i.className += " responsive";
    } else {
      i.className = "nav-menu";
    }
  }


  var a = document.getElementById("loginBtn");
  var b = document.getElementById("registerBtn");
  var x = document.getElementById("login");
  var y = document.getElementById("register");

  function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
  }

  function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}
function addMoreRows() {
  const tableBody = document.querySelector(".table-input tbody");

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
	  <th class="text-center pt-4" scope="row">${tableBody.childElementCount + 1}</th>
	  <td><input class="form-control" type="text" placeholder="Enter Account Number" /></td>
	  <td><input class="form-control" type="text" placeholder="Enter Account Name" /></td>
	`;

  tableBody.appendChild(newRow);
}