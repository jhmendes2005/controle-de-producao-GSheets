function getOperador() {
  let dateNow = new Date();
  dateNow = dateNow.getHours();

  let dateNow2 = new Date();
  dateNow2 = dateNow2.getDay()

  var operador;

  if (dateNow <= 13 && dateNow >= 05) {
    if (dateNow2 != 6) {
      operador = "Período 1";
    } else {
      operador = "Sábado"
    }
  } else if (dateNow => 14 && dateNow <= 22) {
    if (dateNow2 != 6) {
      operador = "Período 2";
    } else {
      operador = "Sábado"
    }
  };

  return operador;
};
  
function getHora() {
  var dateNow = new Date();
  return dateNow;
};

function getId(maquina) {
  let oper = getOperador();
  if (oper == "Período 1") {
    oper = "P1"
  } else if (oper == "Período 2") {
    oper = "P2"
  } else if (oper == "Sábado") {
    oper = "SA"
  }

  let serial1 = Math.floor(Math.random() * 99);
  let serial2 = Math.floor(Math.random() * 99);

  let id = "" + maquina + oper + serial1 + serial2;

  return id;
};