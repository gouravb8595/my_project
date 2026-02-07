const toPheranhite = document.getElementById("toPheranhite");
const toCelcius = document.getElementById("toCelcius");
const textBox = document.getElementById("textBox");
let result = document.getElementById("result");
let temp;



function convert(){
    if(toPheranhite.checked){
        temp = Number(textBox.value)
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F";
    }
    else if(toCelcius.checked){
        temp = Number(textBox.value);
        temp = (temp -32 ) * (5 / 9);
        result.textContent = temp.toFixed(1) + "°C";
    }
    else{
        result.textContent = "Please choose a unit";
    }
};

