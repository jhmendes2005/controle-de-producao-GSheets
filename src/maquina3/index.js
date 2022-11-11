/* SETTER'S PRODUÇÃO 1 */
function setTarefa3() {
  setHora(6, 9, "operacional");
  setValues(7, 9, "Produção", "operacional")
  setValues(8, 8, "Bobina:", "operacional")
  setValues(9, 8, "Tipo:", "operacional")
};

function setProducaoFinal3() {
  let ss = SpreadsheetApp.getActive();
  let sheet = ss.getSheetByName("operacional");

  let maquina = 3;
  let bobinaUnds = sheet.getRange(10, 9).getValue();
  let bobinaKg = sheet.getRange(11, 9).getValue();
  let pesoTotal = bobinaKg * bobinaUnds;
  let id = getId(maquina);

  var objProducao = {
    start: sheet.getRange(6, 9).getValue(),
    machine: maquina,
    service: sheet.getRange(7, 9).getValue(),
    bobin: sheet.getRange(8, 9).getValue(),
    type: sheet.getRange(9, 9).getValue(),
    bobinUnd: bobinaUnds,
    bobinKg: bobinaKg,
    bobinTotal: pesoTotal,
    end: getHora(),
    oper: getOperador(),
    id: id
  };

  let counter = 0;

  for(var x in objProducao) {
    if (objProducao[x] === null || objProducao[x] === "" || objProducao[x] === " ") {
      var erro = "Preencha a tabela corretamente! Está faltando este dado: " + x;
      var result = SpreadsheetApp.getUi().alert("Erro: " + erro, SpreadsheetApp.getUi().ButtonSet.OK);
      //SpreadsheetApp.getActive().toast("result");
      break
    } else {
      counter++;
    };
  };

  if (counter === 11) {
    setValues(12, 8, "Produção confirmada!", "operacional");
    setRollsArray(objProducao, "produção");
    
    var dataAtual = new Date();
    var dataAtual = dataAtual.getDate();
    setProducaoMaquina(pesoTotal, dataAtual, maquina);

    setValues(6, 9, "", "operacional");
    setValues(8, 9, "", "operacional");
    setValues(9, 9, "", "operacional");
    setValues(10, 9, "", "operacional");
    setValues(11, 9, "", "operacional");
    setValues(12, 9, "", "operacional");

    setValues(12, 8, "Produção não confirmada!", "operacional");

  } else {
  }
};