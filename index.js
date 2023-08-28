
let userDisplay = document.querySelector("#userchoice")
let resultDisplay = document.querySelector("#result")
let computerDisplay = document.querySelector("#computerchoice")

let btn = document.querySelectorAll("button")

let userChoice

btn.forEach(btn=>{
    btn.addEventListener('click', (e)=>{
        userChoice = e.target.id
        userDisplay.innerHTML = userChoice
        let userImage = document.querySelector("#userimagedisplay")
        userImage.src = userChoice+".png"
        generateComputerChoice()
    })
})

let randomno ;
const generateComputerChoice=()=>{
        let possibleOutcomes = ["ROCK","PAPER","SCISSOR"]
        randomno = possibleOutcomes[Math.floor(Math.random() * 3)]
        computerDisplay.innerHTML = randomno
        let computerImage = document.querySelector("#computerimagedisplay")
        computerImage.src = randomno+".png"
        generateResult()
}
const generateResult=()=>{
    if(userChoice == randomno ){
        resultDisplay.innerHTML = "DROW"
    }
    else if(userChoice == "ROCK" && randomno == "SCISSOR"){
        resultDisplay.innerHTML = "WON"
        
    }
    else if(userChoice == "PAPER" && randomno == "ROCK"){
        resultDisplay.innerHTML = "WON"
        
    }
    else if(userChoice == "SCISSOR" && randomno == "PAPER"){
        resultDisplay.innerHTML = "WON"
        
    }
    else if(userChoice == "SCISSOR" && randomno == "ROCK"){
        resultDisplay.innerHTML = "LOST"
        
    }
    else if(userChoice == "ROCK" && randomno == "PAPER"){
        resultDisplay.innerHTML = "LOST"
        
    }
    else if(userChoice == "PAPER" && randomno == "SCISSOR" ){
        resultDisplay.innerHTML = "LOST"
        
    }
    
    
    let result = resultDisplay.textContent;
    console.log(result)
    let resultImage = document.querySelector("#resultimagedisplay")
    resultImage.src = result+".png"
    
}




//      Rock wins against scissors;
//      paper wins against rock;
//      scissors wins against paper.
 

    