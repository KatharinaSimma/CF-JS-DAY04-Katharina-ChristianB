
function changeColor(){

	// Safe of Input
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var age = document.getElementById("age").value;
    var job = document.getElementById("job").value;


    // Output of String to Browser Window
    document.getElementById('userInput').innerHTML += "Hallo, " + firstName + " " + lastName + ". You are " + age + " years old. Your work in " + job + " <br>";



    // Text Color of Output
    if (firstName.length > 5){
        document.getElementById("userInput").style.color ="green"
    } else {
        document.getElementById("userInput").style.color ="red"
    }


    // BackgroundColor based on Select Value
    if (job == "IT") {
    	 document.getElementById("userInput").style.backgroundColor ="purple";
    } else if (job == "Hospitality"){
    	 document.getElementById("userInput").style.backgroundColor ="yellow";
    } else {
    	document.getElementById("userInput").style.backgroundColor ="green";
    }
}


// Call Function by Event
document.getElementById("submit").addEventListener("click",changeColor,false);