/* SETTER'S PRODUÇÃO 1 */
function setTarefa2() {
  setHora(6, 6, "operacional");
  setValues(7, 6, "Produção", "operacional")
  setValues(8, 5, "Bobina:", "operacional")
  setValues(9, 5, "Tipo:", "operacional")
};

function setProducaoFinal2() {
  let ss = SpreadsheetApp.getActive();
  let sheet = ss.getSheetByName("operacional");

  let maquina = 2;
  let bobinaUnds = sheet.getRange(10, 6).getValue();
  let bobinaKg = sheet.getRange(11, 6).getValue();
  let pesoTotal = bobinaKg * bobinaUnds;

  var objProducao = {
    start: sheet.getRange(6, 6).getValue(),
    machine: maquina,
    service: sheet.getRange(7, 6).getValue(),
    bobin: sheet.getRange(8, 6).getValue(),
    type: sheet.getRange(9, 6).getValue(),
    bobinUnd: bobinaUnds,
    bobinKg: bobinaKg,
    bobinTotal: pesoTotal,
    end: getHora(),
    oper: getOperador()
  }

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
  }

  if (counter === 10) {
    setValues(12, 5, "Produção confirmada!", "operacional");
    setRollsArray(objProducao, "produção");
    
    var dataAtual = new Date();
    var dataAtual = dataAtual.getDate();
    setProducaoMaquina(pesoTotal, dataAtual, maquina);

    setValues(6, 6, "", "operacional");
    setValues(8, 6, "", "operacional");
    setValues(9, 6, "", "operacional");
    setValues(10, 6, "", "operacional");
    setValues(11, 6, "", "operacional");
    setValues(12, 6, "", "operacional");

    setValues(12, 5, "Produção não confirmada!", "operacional");

  } else {
  }
};