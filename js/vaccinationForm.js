function onSubmit() {
    var age = document.getElementById("age").value;
    var newOutputText = "You are " + age + " years old. You can take ";
    var newOutputVal = "This is the recommended vaccine plan for you: \n \n";
    var vulnerable = document.getElementById("vul");
    if (age > 0) {
        newOutputText += "Pfizer-BioNTech/Comirnaty";
    }
    if (age <= 4 || age >= 18) {
        newOutputText += ", Moderna/Spikevax";
    }
    if (age >= 18) {
        newOutputText += ", Novavax/Nuvaxovid, Sinovac-CoronaVac"
    }

    if (age <= 4) {
        newOutputVal = "Two doses of Moderna/Spikevax, OR three doses of Pfizer-BioNTech/Comirnaty.<br>Both given eight weeks apart for each.";
    }
    else if (age <= 11) {
        newOutputVal = "Three doses of Pfizer-BioNTech/Comirnaty.<br>First and second dose spaced eight weeks apart.<br>Second and third dose spaced five months apart.";
        if (vulnerable.checked) {
            newOutputVal += "<br>Thereafter, you should also receive an additional booster dose between five months to one year from your last dose, if recommended to do so by your doctor."
        }
    }
    else if (age <= 17) {
        newOutputVal = "Three doses of Pfizer-BioNTech/Comirnaty.<br>First and second dose spaced eight weeks apart.<br>Second and third dose spaced five months apart.<br>Thereafter, you should also receive an additional booster dose between five months to one year from your last dose. The bivalent vaccine is recommended for this.";
    }
    else {
        newOutputVal = "Three doses of of Pfizer-BioNTech/Comirnaty, Moderna/Spikevax or Novavax/Nuvaxovid, or four doses of Sinovac-Coronavac for minimum protection.<br>First and second dose should be spaced eight weeks apart (for both 3 and 4 doses).<br>Second and third dose is five months (for 3 doses).<br>Second and third, as well as third and fourth dose is three months (for 4 doses).<br>Thereafter, you should receive an additional booster dose between five months to one year from your last dose. The updated bivalent vaccines is recommended for this."
    }
    document.getElementById("outputText").innerHTML = newOutputText;
    document.getElementById("outputVal").innerHTML = newOutputVal;
}

function onReset() {
    document.getElementById("age").innerHTML = "";
    document.getElementById("vul").innerHTML = "";
    document.getElementById("outputText").innerHTML = "";
    document.getElementById("outputVal").innerHTML = "";
}