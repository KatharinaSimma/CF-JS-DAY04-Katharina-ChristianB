// Array for whole Class Hotel
var arr = [];

console.log(arr)

class Hotel {
    hotelName;
    numberOfNights;
    address;
    image;

    constructor(a,b,c,d){
        this.hotelName = a;
        this.numberOfNights = b;
        this.address = c;
        this.image = d;
        // Push values of Class to array
        arr.push(this);
    }

    // this function creates a method for the class:
    showAvailability(){
        var availability = this.numberOfNights - Number(document.getElementById("bookedNights").value);
        //console.log(document.getElementById("bookedNights").value,this);
        if(availability > 0){
             document.getElementById("result").innerHTML += "There are " + availability + " available <button>Book Now</button><br>";
        }else {
            document.getElementById("result").innerHTML += "Sorry, No rooms available in "+this.hotelName +"<br>";
        }
    }
}

// Creation of Class Elements
var hotel1 = new Hotel("PensionK", Math.ceil(Math.random()*10),"Wien", "https://codefactory.wien/wp-content/uploads/2020/01/cropped-Logo-2.png");

var hotel2 = new Hotel("Hilton", Math.ceil(Math.random()*10),"Linz", "https://codefactory.wien/wp-content/uploads/2020/01/cropped-Logo-2.png");

var hotel3 = new Hotel("Schlössl", Math.ceil(Math.random()*10),"Bregenz", "https://codefactory.wien/wp-content/uploads/2020/01/cropped-Logo-2.png");

var hotel4 = new Hotel("Test", Math.ceil(Math.random()*10),"Bregenz", "https://codefactory.wien/wp-content/uploads/2020/01/cropped-Logo-2.png");

// Event - Output to id="btn" Button -- Wenn die Methode innerhalb eines Events gecalled wird müssen ausnahmsweise die Klammern dabei stehen
document.getElementById("btn").addEventListener("click", function(){
    //Loops through array to catch number of nights for each Hotel
    for(var i = 0 ; i < arr.length ; i++){
        arr[i].showAvailability();
    }
        
    }  , false);



