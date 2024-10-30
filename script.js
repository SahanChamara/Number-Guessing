
let generateNumber = (Math.floor((Math.random() * 10) + 1));
let result = document.getElementById("result");
let chanse = document.getElementById("chanse");






let count=3;
chanse.innerHTML=`Chances Left : ${count}`;


function numberGuess() {
    let userInputNumber = Number(document.getElementById("txtField").value);

    if(count>0){
        if(generateNumber == userInputNumber){
            result.innerHTML="You Win";
        }else if(userInputNumber>generateNumber){
            result.innerHTML="Number is too High";
        }else{
            result.innerHTML="Number is Too Low";
        }
        count--;
        chanse.innerHTML=`Chances Left : ${count}`;
    }else{
        result.innerHTML="Game Over";

    }
    console.log(generateNumber);
    

    
    
}