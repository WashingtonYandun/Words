export const updateGame = (req, res) => {
    try {
        const MAX_ATTEMPTS = 6;

        let gameState = {
            attempt: 0,
            target_word: "",
            current_word_tried: "",
            state: [],
            won: false
        };

        let state = req.body.state;
        let target_word = req.body.target_word;
        let current_word_tried = req.body.current_word_tried;
        let attempt = req.body.attempt;

        gameState.state = state;
        gameState.target_word = target_word;
        gameState.current_word_tried = current_word_tried;

        if (state === undefined || target_word === undefined || current_word_tried === undefined) {
            throw new Error("Missing parameters");
        }

        // if the current word is the target word, the game is won
        if (current_word_tried === target_word) {
            gameState.attempt = attempt + 1;
            gameState.won = true;
            gameState.state.push(current_word_tried.toLowerCase());
            res.json(gameState);
            return;
        }

        // if the letter is not in the target word, upper that letter and add the modified word to the state
        let word_state = "";
        for (let i = 0; i < target_word.length; i++) {
            if (target_word[i] === current_word_tried[i]) {
                word_state += current_word_tried[i];
            } else {
                word_state += current_word_tried[i].toUpperCase();
            }
        }

        // if the current word is not the target word, the game continues
        gameState.attempt = attempt + 1;
        gameState.won = false;
        gameState.state.push(word_state);
        res.json(gameState);

    } catch (error) {
        console.log(error);
        console.log(req.body)
        res.status(500).send(">> WORDLE == Something went wrong!");
    }
}