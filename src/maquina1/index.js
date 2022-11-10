/* SETTER'S PRODUÇÃO 1 */
function setTarefa1() {
    setHora(6, 3, "operacional");
    setValues(7, 3, "Produção", "operacional")
    setValues(8, 2, "Bobina:", "operacional")
    setValues(9, 2, "Tipo:", "operacional")
};
  
function setProducaoFinal1() {
  let ss = SpreadsheetApp.getActive();
  let sheet = ss.getSheetByName("operacional");

  let maquina = 1;
  let bobinaUnds = sheet.getRange(10, 3).getValue();
  let bobinaKg = sheet.getRange(11, 3).getValue();
  let pesoTotal = bobinaKg * bobinaUnds;

  var objProducao = {
    start: sheet.getRange(6, 3).getValue(),
    machine: maquina,
    service: sheet.getRange(7, 3).getValue(),
    bobin: sheet.getRange(8, 3).getValue(),
    type: sheet.getRange(9, 3).getValue(),
    bobinUnd: bobinaUnds,
    bobinKg: bobinaKg,
    bobinTotal: pesoTotal,
    end: getHora(),
    oper: getOperador()
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

  if (counter === 10) {
    setValues(12, 2, "Produção confirmada!", "operacional");
    setRollsArray(objProducao, "produção");
    
    var dataAtual = new Date();
    var dataAtual = dataAtual.getDate();
    setProducaoMaquina(pesoTotal, dataAtual, maquina);

    setValues(6, 3, "", "operacional");
    setValues(8, 3, "", "operacional");
    setValues(9, 3, "", "operacional");
    setValues(10, 3, "", "operacional");
    setValues(11, 3, "", "operacional");
    setValues(12, 3, "", "operacional");

    setValues(12, 2, "Produção não confirmada!", "operacional");

  } else {
  };
};