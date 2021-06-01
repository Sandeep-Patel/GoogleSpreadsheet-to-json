

function exportSheetAsJSON() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var rows = sheet.getDataRange();
  var numRows = rows.getNumRows();
  var numCols = rows.getNumColumns();
  var values = rows.getValues();

  var output = "";
  output += "[\n\n";
  var header = values[0];
  for (var i = 1; i < numRows; i++) {
    if (i > 1) output += " , \n";
    var row = values[i];
    output += "{ ";
    for (var a = 0;a<numCols;a++){
      if (a > 0) output += " , ";
         output += "\""+header[a]+"\" : \""+row[a]+"\"";
    }
    output += "}";
  
  }
  output += "\n\n]";
  Logger.log(output);

  DriveApp.createFile(sheet.getName()+".json", output, MimeType.PLAIN_TEXT);

};
