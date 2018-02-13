function GetSelection() {
    try {
        var temp = document.getElementById("tempData").value;

        if (isNaN(temp)) {
            alert("Please enter a valid temperature");

        }

        else if (document.getElementById("Celsius").checked == true) {
            converToFahrenheit(temp);
        }

        else if (document.getElementById("Fahrenheit").checked == true) {
            converToCelsius(temp);
        }

        else {
            alert("please choose one of the options");
        }
    }
    catch (ex) {
        console.log("General Error has occured: " + ex.name + "--" + ex.message);
    }
}



$(document).ready(function () {
    try {
        $("#ExitBttn").click(function () {
            $("#Meanbox").fadeOut(2000);
            $("#GoodByeMsg").fadeIn(2000)

        });
        if (false) {
            throw new Error("bttn not working");
        }
    }
    catch (ex) {
        throw (ex);
    }
});

$(document).ready(function () {
    try {
        $("#ClearBttn").click(function () {
            $("#result").text(' ');
            $("#tempData").val('')
        });
        if (false) {
            throw new Error(" clear bttn not working");
        }
    }
    catch (ex) {
        throw (ex);
    }
});


function clearSelection() {
    try {
        document.getElementById("Celsius").checked = false;
        document.getElementById("Fahrenheit").checked = false;
    }
    catch (ex){
        throw (ex);
    }
}



function converToFahrenheit(celsius) {
    try {
        var Fahrenheit = (celsius - 32) / 1.8;
        var rus = document.getElementById("result").innerHTML = Fahrenheit;

        if (false) {
            throw new Error(" converToFahrenheit not working");
        }
    }
    catch (ex) {
        throw (ex);
    }
}




function converToCelsius(Fahrenheit) {
    try {
        var celsius = (Fahrenheit * 1.8) + 32;
        rus2 = document.getElementById("result").innerHTML = celsius;
        if (false) {
            throw new Error(" converToCelsius not working");
        }
    }
    catch (ex) {
        throw (ex);
    }
}