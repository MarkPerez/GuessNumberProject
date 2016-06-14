//Event Listener
var event1 = document.getElementById("button1");
event1.addEventListener('click', activate, false);

var event2 = document.getElementById("button2");
event2.addEventListener('click', reset, false);

var secretNumber = Math.floor((Math.random() * 100) + 1);
var text = "";
var numberOfGuesses = 1;

function activate(){
    
    var userinput1 = parseInt(document.getElementById("input1").value);
    
    if (userinput1 == secretNumber){
        text = "Secret number: " + secretNumber + "<br>" + "Number of guesses: " + numberOfGuesses + "<br>" + "Well done - correct guess!";
        
    }
    
    else {
        while (userinput1 !== secretNumber){
            
            if (userinput1 > secretNumber){
                
                text = "Your guess was too high!";
            }
        
            else {
                
                text = "Your guess was too low!";            
            }
        
            numberOfGuesses++;
            break;
        }
        
    }       
        
    document.getElementById("demo").innerHTML = text;

}

function reset(){
    numberOfGuesses = 1;
    secretNumber = Math.floor((Math.random() * 100) + 1);
    text = ""
    document.getElementById("demo").innerHTML = text;
    
} 
    

