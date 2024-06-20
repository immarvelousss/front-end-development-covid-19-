// JavaScript source code

var continents = new Array();
continents["africa"] = false;
continents["antartica"] = false;
continents["asia"] = true;
contients["europe"] = true;
contients["northAmerica"] = true;
contients["oceania"] = false;
contients["southAmerica"] = true;

var symptoms = new Array();
symptoms["yes"] = true;
symptoms["no"] = false;

var contact = new Array();
contact["yes"] = true;
contact["no"] = false;

function selectcontinent() {
    var theForm = document.forms["highriskform"];
    var continent = theForm.elements["continent"];
    highrisk = false;
    for (var i = 0; i < continent.length; i++) {
        if (continent[i].checked) {
            highrisk = contients[continent[i].value];
            break;
        }
    }
    
}

function selectflusymptoms() {
    var theForm = document.forms["highriskform"];
    var flusymptoms = theForm.elements["symptoms"];
    var symptom = false;
    for (var i = 0; i < flusymptoms; i++) {
        if (flusymptoms[i].checked) {
            symptom = symptoms[flusymptoms[i].value];
            break;
        }
    }
    return symptom;
}

function contactinfected() {
    var theForm = document.forms["highriskform"];
    var contactinfected = theForm.elements["contact"];
    var closecontact = false;
    for (var i = 0; i < contactinfected.length; i++) {
        if (contactinfected[i].checked) {
            closecontact = contact[contactinfected[i].value];
            break;
        }
    }
    return closecontact;
}

function calculatepercentage() {
    var resultcontinent = selectcontinent();
    var resultflusymptom = selectflusymptoms();
    var resultcontactinfected = contactinfected();
    var theForm = document.forms["highriskform"];
    var divObj = theForm.elements["output"];
    var final = "High risk";
    var message;
    

    if (resultcontinent == true) {
        final = "High risk";
    }

    else if (resultflusymptom == true) {
        final = "High risk";
    }

    else if (resultcontactinfected == true) {
        final = "High risk";
    }

    else {
        final = "Low risk";
    }

    message = "You are at" + final;
    divObj.style.display = block;
    divObj.innnerHTML = message;
    
}






