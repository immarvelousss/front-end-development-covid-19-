/*protocols points sliding*/
$(document).ready(function () {
    $(".steps").next().hide();
    $(".steps").click(function () {
        $(this).next().slideToggle();
    });
});


/*slideshow script*/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}





/*form script*/

function getartresult() {
    var msg = "";
    var theForm = document.forms["covidform"];
    var line = theForm.elements["lines"];
    for (var i = 0; i < line.length; i++) {
        if (line[i].checked) {
            if (line[i].value == "none" || line[i].value == "oneT") {
                msg = "Try taking the ART test again, as there should only be 1 line at C or 2 lines.";
            }
            else if (line[i].value == "oneC") {
                msg = "You are covid negative.";
            }
            else {
                msg = "You are covid positive.";
            }
        }
    }
    return msg;
}

function getclosecon() {
    var msg = "";
    var theForm = document.forms["covidform"];
    var con = theForm.elements["closecon"];
    for (var i = 0; i < con.length; i++) {
        if (con[i].checked) {
            if (con[i].value == "yes") {
                msg = "You need to self-test with ART daily for 5 days. Only leave home when you are tested negative.";
            }
        }
    }
    return msg;
}


function getsympt() {
    var msg = "";
    var numofsymp = 0;
    var theForm = document.forms["covidform"];
    var symp = theForm.elements["symptoms"];
    for (var i = 0; i < symp.length; i++) {
        if (symp[i].checked) {
            numofsymp++;
        }
    }
    var artresult = getartresult();
    if (numofsymp == 0 && artresult == "You are covid positive.") {
        msg = "Please refrain from going out even if you do not show signs of covid symptoms.";
    }
    if (numofsymp > 0 && artresult == "You are covid positive.") {
        msg = "If these symptoms get worse, please visit a doctor.";
    }

    return msg;
}

function getcon() {
    var msg = "";
    var con = document.getElementById("condition")
    var artresult = getartresult();
    for (var i = 0; i < con.length; i++) {
        if (con[i].selected) {
            if (con[i].value != "none") {
                if (artresult == "You are covid positive.") {
                    msg = "Please visit a doctor via private transport even if you are feeling well. The doctor will assess and advise you on your next steps. You may still be assessed eligible for recovery at home or you may be conveyed to a care facility.";
                }
            }
        }

    }
    return msg;
} 
function isolatedays() {
    var msg = "";
    var artresult = getartresult();
    var age = document.getElementById("age").value;
    var vacc = document.getElementById("fullv").value;
    if (artresult == "You are covid positive.") {
        if (age < 12 || vacc == "yes") {
            msg = "First, you need to isolate for 72 hours. End isolation when you are tested negative using ART test. If you are still positive after 72 hours, you can end isolation on Day 7."
        }
        else {
            msg = "First, you need to isolate for 72 hours. End isolation when you are tested negative using ART test. If you are still positive after 72 hours, you can end isolation on Day 14."
        }
    }
    return msg;
}

function displaymsg() {
    var artresult = getartresult();
    var closecon = getclosecon();
    var symptoms = getsympt();
    var condition = getcon();
    var ending = isolatedays();
    var finalmsg = artresult + " " + closecon + " " + symptoms + " " + condition + " " + ending;
    return finalmsg;
}
function submitForm() {
    var divObj = document.getElementById("finalMessage");
    var email = document.getElementById("iEmail").value;
    divObj.style.display = "block";
    divObj.innerHTML = displaymsg() + " The result has been sent to your email at " + email + ".";
}
function resetForm() {
    document.getElementById("covidform").reset();
    divobj = document.getElementById("finalMessage");
    divobj.style.display = 'none';
}
