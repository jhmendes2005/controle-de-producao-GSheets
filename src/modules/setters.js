function setHora(x, y, spread) {
    let ss = SpreadsheetApp.getActive();
    let sheet = ss.getSheetByName(spread);
    sheet.getRange(x, y).setValue(new Date());
};

function setValues(x1, y1, value, spread) {
    let ss = SpreadsheetApp.getActive();
    let sheet = ss.getSheetByName(spread);
    sheet.getRange(x1, y1).setValue(value);
};

function setRollsArray(obj, spread) {
    let ss = SpreadsheetApp.getActive();
    let sheet = ss.getSheetByName(spread);
    var arrayFinal = new Array();

    for (var x in obj) {
      arrayFinal.push(obj[x]);
    };

    sheet.appendRow(arrayFinal);
};

function setProducaoMaquina(totalParcial, data, maquina) {
    let ss = SpreadsheetApp.getActive();
    let sheet = ss.getSheetByName("logs");
    let ultimaData = sheet.getRange(1, 2).getValue()

    if (ultimaData == data) {
        if (maquina === 1) {
            setProducaoM1(totalParcial)
        } else if (maquina === 2) {
            setProducaoM2(totalParcial)
        } else if (maquina === 3) {
            setProducaoM3(totalParcial)
        }
    } else {
        var dataAtualLog = new Date();
        dataAtualLog = dataAtualLog.getDate();
        setValues(1, 2, "" + dataAtualLog, "logs")
        let ultimaData2 = sheet.getRange(1, 2).getValue()
        resetMaquinas()

        if (ultimaData2 == data) {
            if (maquina === 1) {
                setProducaoM1(totalParcial)
            } else if (maquina === 2){
                setProducaoM2(totalParcial)
            } else if (maquina === 3) {
                setProducaoM3(totalParcial)
            }
        }
    };
}

function setProducaoM1(totalParcial) {
    let ss = SpreadsheetApp.getActive();
    let sheet = ss.getSheetByName("logs");
    let valorAtual = sheet.getRange(3, 2).getValue();

    var valorAtualizado = valorAtual + totalParcial;
    setValues(1, 3, valorAtualizado, "operacional");
    setValues(3, 2, valorAtualizado, "logs");
};

function setProducaoM2(totalParcial) {
    let ss = SpreadsheetApp.getActive();
    let sheet = ss.getSheetByName("logs");
    let valorAtual = sheet.getRange(4, 2).getValue();
    
    var valorAtualizado = valorAtual + totalParcial;
    setValues(1, 6, valorAtualizado, "operacional");
    setValues(4, 2, valorAtualizado, "logs");
};

function setProducaoM3(totalParcial) {
    let ss = SpreadsheetApp.getActive();
    let sheet = ss.getSheetByName("logs");
    let valorAtual = sheet.getRange(5, 2).getValue();
    
    var valorAtualizado = valorAtual + totalParcial;
    setValues(1, 9, valorAtualizado, "operacional");
    setValues(5, 2, valorAtualizado, "logs");
};

function resetMaquinas() {
    setValues(1, 3, 0, "operacional");
    setValues(1, 6, 0, "operacional");
    setValues(1, 9, 0, "operacional");
    setValues(3, 2, 0, "logs");
    setValues(4, 2, 0, "logs");
    setValues(5, 2, 0, "logs");
};