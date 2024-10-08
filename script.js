function getComputerChoice() {
    // create variable to generate 0, 1, or 2
    const randomNumber = Math.floor(Math.random() * 3);

    // traslate to rock, paper, or scissors respectively
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

//console.log(getComputerChoice());

function getHumanChoice() {
    // prompt user for their choice
    let answer = prompt("Choose between rock, paper, or scissors:");
    // convert the choice to lowercase to handle case variations
    answer = answer.toLowerCase();

    if (answer === "rock" || answer === "paper" || answer === "scissors") {
        return answer;
    } else {
        return "Invalid choice";
    }
}

//console.log(getHumanChoice());

// initialize the scores
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    // check if humanChoice is invalid
    if (humanChoice === "Invalid choice") {
        console.log("Invalid input, round cannot be played.");
        return;
    }

    // if both choices are the same, it's a tie
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`)
    }
    // human wins
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        humanScore ++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } 
    // computer wins
    else {
        computerScore ++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }

    // print current score
    console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
}

// loop to play 5 rounds
for (let i = 0; i < 5; i++) {
    console.log(`Round ${i + 1}:`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log("-----------------------------------------");
}

// display the final score after 5 rounds
console.log("Game over!");
console.log(`Final score - Human: ${humanScore}, Computer ${computerScore}`);