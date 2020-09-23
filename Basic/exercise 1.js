
function changeColor(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;

    document.getElementById('userInput').innerHTML += "Hallo, " + firstName + " " + lastName + ". You are " + age + " years old. <br>";

    if (firstName.length > 5){
        document.getElementById("userInput").style.color ="green"
    } else {
        document.getElementById("userInput").style.color ="red"
    }
}

document.getElementById("submit").addEventListener("click",changeColor,false);


