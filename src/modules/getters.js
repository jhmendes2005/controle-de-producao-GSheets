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
  let obj = {
    s: "s",
    o: "o",
    b: "b",
    e: "e",
    r: "r",
    a: "a",
    n: "n",
  };
  const keys = Object.keys(obj);

  let oper = getOperador();
  if (oper == "Período 1") {
    oper = "P1"
  } else if (oper == "Período 2") {
    oper = "P2"
  } else if (oper == "Sábado") {
    oper = "SA"
  };

  let serialOper = maquina + oper;

  let serialLetters = obj[keys[Math.floor(Math.random() * 6)]]
  let serial1 = Math.floor(Math.random() * 999);
  let serial2 = Math.floor(Math.random() * 999);
  let serialGerated = serial1 + serialLetters + serial2

  let id = serialOper + serialGerated;

  return id;
};