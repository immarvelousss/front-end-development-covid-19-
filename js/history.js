// JavaScript source code

//SLIDESHOW
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

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





//MINI QUIZ
var years = new Array();
years["2019"] = 1;
years["2020"] = 0;
years["2021"] = 0;
years["2022"] = 0;

var vaccines = new Array();
vaccines["Novavax"] = 0;
vaccines["Pfizer-BioNtech"] = 1;
vaccines["Sinovac"] = 0;
vaccines["Moderna"] = 0;

var names = new Array();
names["COVID-19 Virus"] = 0;
names["Coronavirus"] = 0;
names["Wuhan Virus"] = 1;
names["Omicron Virus"] = 0;

var datePhase = new Array();
datePhase["31/12/2019"] = 0;
datePhase["08/11/2020"] = 0;
datePhase["01/03/2021"] = 0;
datePhase["04/05/2021"] = 1;

var numPhase = new Array();
numPhase["5"] = 0;
numPhase["2"] = 0;
numPhase["3"] = 1;
numPhase["6"] = 0;

var msg;
var points = 0;
var pointsYear = 0;
var pointsVaccine = 0;
var pointsName = 0;
var pointsDate = 0;
var pointsNum = 0;
var divobj = document.getElementById("results");

var theForm = document.forms["miniGame"];
var year = theForm.elements["year"];
var vaccine = theForm.elements["vaccine"];
var naming = theForm.elements["name"];
var phaseDate = theForm.elements["date"];
var num = theForm.elements["num"];

function checkAns() {
    for (var i = 0; i < year.length; i++) {
        if (year[i].checked) {
            pointsYear = years[year[i].value];
            break;
        }
    }
    for (var i = 0; i < vaccine.length; i++){
        if (vaccine[i].checked) {
            pointsVaccine = vaccines[vaccine[i].value];
            break;
        }
    }
    for (var i = 0; i < naming.length; i++) {
        if (naming[i].checked) {
            pointsName = names[naming[i].value];
            break;
        }
    }
    for (var i = 0; i < phaseDate.length; i++) {
        if (phaseDate[i].checked) {
            pointsDate = datePhase[phaseDate[i].value];
            break;
        }
    }
    for (var i = 0; i < num.length; i++) {
        if (num[i].checked) {
            pointsNum = numPhase[num[i].value];
            break;
        }
    }

    points = pointsYear + pointsVaccine + pointsName + pointsDate + pointsNum;
    msg = "Your score: " + points + "/5. ";
    if (points == 5){
        msg += "Excellent!";
    }
    else if (points >= 3) {
        msg += "Almost there!";
    }
    else{
        msg += "Try again!";
    }
}

function displayMsg() {
    divobj.style.display = "block";
    divobj.innerHTML = msg;
}