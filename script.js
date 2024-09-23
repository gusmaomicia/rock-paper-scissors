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

