function doGet(request){
    return HtmlService.createTemplateFromFile('index').evaluate();
}

function include(filename){
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function processForm(formObject){
    var url = "";                                  /* akhane Google sheet er link dete hobe */
    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName("Sheet1");                /*akhane google Sheet er sheet nam dete ho jode sheet nam 
                                                                               change kora hy */

    ws.appendRow([
        formObject.fullname,
        formObject.phonenumber,
        formObject.emailname,
        formObject.nidnumber,
        formObject.dob,
        formObject.gender,
        formObject.brn,
        formObject.eq,
        formObject.skills
    ]);
}