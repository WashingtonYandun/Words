export const updateGame = (req, res, next) => {
    const MAX_ATTEMPTS = 6;

    let gameState = {
        word: "",
        attempts: 0,
        success: false,
        state: [],
        lastchar: "",
        lastcharpos: [],
        won: false
    };

    if (gameState.attempts >= MAX_ATTEMPTS) {
        return res.json(gameState);
    }

    let clientChar = req.body.char;
    let currentState = req.body.state;
    let word = req.body.word;
    let attempts = req.body.attempts;

    gameState.lastchar = clientChar;
    gameState.state = currentState;
    gameState.word = word;
    gameState.attempts = attempts;

    gameState.state.forEach((letter, index) => {
        if (letter.char === clientChar) {
            letter.correct = true;
            letter.pos = index;
            gameState.lastcharpos.push(index);
        }
    });

    gameState.attempts++;

    gameState.success = gameState.state.every(letter => letter.correct);
    gameState.won = gameState.success || gameState.attempts >= MAX_ATTEMPTS;


    updateGameState(char);

    res.json(gameState);
}
