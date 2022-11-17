//Model for tests: https://docs.google.com/spreadsheets/d/14J-pIhruHfn2RYxb8vkIBeFng88iTih3uTrxfc02u7g/edit#gid=0
//For use best use, export this project to your prefer IDE, and use the Framework *Clasp* on Yarn or NPM

function onEdit(e) {
  let ss = SpreadsheetApp.getActive();
  let sheet = ss.getSheetByName("operacional");
  let celula1 = sheet.getRange(7, 3).getValue()
  let celula2 = sheet.getRange(7, 6).getValue()
  let celula3 = sheet.getRange(7, 9).getValue()

  switch (celula1)  {
        case "Produção":
          setValues(8, 2, "Bobina:", "operacional");
          setValues(9, 2, "Tipo:", "operacional");
          break;
        default:
          setValues(7, 3, "Produção", "operacional")
          setValues(8, 2, "Bobina:", "operacional")
          setValues(9, 2, "Tipo:", "operacional")
          break;
  }
    switch (celula2)  {
        case "Produção":
          setValues(8, 5, "Bobina:", "operacional");
          setValues(9, 5, "Tipo:", "operacional");
          break;
        default:
          setValues(7, 6, "Produção", "operacional")
          setValues(8, 5, "Bobina:", "operacional")
          setValues(9, 5, "Tipo:", "operacional")
          break;
  }
    switch (celula3)  {
        case "Produção":
          setValues(8, 8, "Bobina:", "operacional");
          setValues(9, 8, "Tipo:", "operacional");
          break;
        default:
          setValues(7, 9, "Produção", "operacional")
          setValues(8, 8, "Bobina:", "operacional")
          setValues(9, 8, "Tipo:", "operacional")
          break;
  }
};