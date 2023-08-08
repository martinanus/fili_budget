function writeChangeRegister(){
    var userName   = Session.getEffectiveUser().getUsername();
    var budgetLink = generateChangeLogPDF();
    var changeLogItemInst = new changeLogItem(userName, project, budgetLink);

    changeLogSheet.appendRow(changeLogItemInst.getItemArray());
}

function generateChangeLogPDF(){
    var exportUrl   = generateExportUrl();
    var options     = getHttpOptions();

    var response    = UrlFetchApp.fetch(exportUrl, options);
    if (response.getResponseCode() !== 200) {
      console.log("Error exporting Sheet to PDF!  Response Code: " + response.getResponseCode());
    }

    var budgetLink = uploadPdf(response);

    return budgetLink;
}


function generateExportUrl(){

    const urlBase = spreadsheet.getUrl().replace(/edit$/,'');
    const sheetTabId = budgetSheet.getSheetId();
    const ssId = spreadsheet.getId();
    const exportUrl = urlBase +
      'export?'+
      'exportFormat=pdf&format=pdf' +
      '&gid=' + sheetTabId +
      '&id=' + ssId +
      '&size=A4' +
      '&portrait=true' +
      '&fith=true' +
      '&sheetnames=false'+
      '&printtitle=false'+
      '&pagenumbers=true' +
      '&gridlines=false' +
      '&fzr=false';         // frozen rows - do not repeat row headers on each page

    Logger.log('exportUrl: ' + exportUrl)

    return exportUrl;
}


function getHttpOptions(){

    var options = {
      headers: {
        'Authorization': 'Bearer ' +  ScriptApp.getOAuthToken(),
      }
    }
    options.muteHttpExceptions = true;

    return options;
}


function uploadPdf(http_response){
    var folder          = DriveApp.getFolderById(uploadFolderId);
    var date            = new Date().addHours(-3);
    var date_str        = date.toISOString()
    date_str            = date_str.replaceAll(":", "-").replace("T", "_")
    date_str            = date_str.substring(0,19)
    var filename        = "presupuesto_" + date_str;
    var theBlob         = http_response.getBlob().getAs('application/pdf').setName(filename +'.pdf');
    var uploadedFile   = folder.createFile(theBlob);

    return uploadedFile.getUrl();
}

Date.prototype.addHours = function(h) {
    this.setTime(this.getTime() + (h*60*60*1000));
    return this;
}