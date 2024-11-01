function playGame() {
    const choices = [`камінь`, `ножиці`, `папір`];
    const userChoice = prompt(`Виберіть: камінь, ножиці або папір`);
 

    const computerChoice = choices[ Math.floor(Math.random()* choices.length) ];
    alert(`Комп'ютер вибрав: ${computerChoice}` );

    if (userChoice === computerChoice) {
        alert(`Нічия`);
    } else if (
        (userChoice === `камінь` && computerChoice === `ножиці`) ||
        (userChoice === `ножиці` && computerChoice === `папір`) ||
        (userChoice === `папір` && computerChoice === `камінь`)
    ) {
        alert(`Вітаємо, ви виграли!`);
    } else {
        alert(`На жаль, ви програли!`);
    }
}

playGame();
