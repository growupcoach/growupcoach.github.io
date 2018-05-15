/*
mensaje de exito em el envio de form
validacion mail
*/


function removeHr() {
  var x = document.getElementById("hr-remove");
  if (x.style.display === "none") {
    x.style.display = "block"
  } else {
    x.style.display = "none";
  }
}

//form.name.focus();

const form = document.querySelector('form');
form.addEventListener('submit', validar);
//validarEmail(form.email.value)  == 'false'
function validar(event) {
  var bandera = [];

  if (form.name.value == "") {
    bandera.push("nombre");
  }
  if (form.email.value == "" || validarEmail(form.email.value)  == false) {
    bandera.push("email");
  }
  if (form.message.value == "") {
    bandera.push("mensaje");
  }
  if (bandera.length > 0) {

    errorMsg(bandera);

    event.preventDefault();
  }
}

function errorMsg(bandera) {
  for (var i = 0; i < bandera.length; i++) {
    if (bandera[i] == "email") {
      document.getElementById(bandera[i]).innerHTML = "&#9940; Debe ingresar un " + bandera[i] + " valido";
    } else {
      document.getElementById(bandera[i]).innerHTML = "&#9940; Debe ingresar un " + bandera[i];
    }
  }
}

function getId(e) {
  var xid = e.target.id;
  var spanId = xid.split("_").pop();
  deleteSpan(spanId);
}

function deleteSpan(spanId) {
  document.getElementById(spanId).innerHTML = "";
}

function validarEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
