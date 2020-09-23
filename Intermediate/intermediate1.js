

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
   
    }
    // this function creates a method for the class:
  

    showAvailability(){
        var availability = this.numberOfNights - Number(document.getElementById("bookedNights").value);
        console.log(document.getElementById("bookedNights").value,this)
        var result = document.getElementById("result").innerHTML = "There are " + availability + " available";
    }
}


var hotel1 = new Hotel("PensionK", Math.ceil(Math.random()*10),"Wien", "https://codefactory.wien/wp-content/uploads/2020/01/cropped-Logo-2.png")

//console.table(hotel1);

document.getElementById("btn").addEventListener("click", function(){
    if(thatVal == "PensionK"){
        hotel1.showAvailability()
    }else if ()
    
}, false);

addEventListener("click",function(){
    test1()
    test3()
    hotel1.showAvailability()
})




/*var hotel2 = new Hotel("Hilton",randomAvailability,"Linz", "https://codefactory.wien/wp-content/uploads/2020/01/cropped-Logo-2.png")

var hotel3 = new Hotel("Schlössl",randomAvailability,"Bregenz", "https://codefactory.wien/wp-content/uploads/2020/01/cropped-Logo-2.png"*/



