# Words

Word games microservices (Wordle, Hangman)

> [!WARNING]
> This was an academic project and is not intended for production use.
> Was developed as part of the Distributed Systems course at Udla to learn about microservices as distributed systems.
> The project is not maintained, the code is not optimized and there are no tests because it was not part of the course.

## Wordle Microservice

The Wordle microservice is a RESTful API that provides a word guessing game. The game is similar to the popular game Wordle. The game is played by guessing a word and receiving feedback on the correctness of the guess. The game is won when the correct word is guessed within a certain number of guesses.

## Hangman

The Hangman microservice is a RESTful API that provides a word guessing game. The game is played by guessing a word and receiving feedback on the correctness of the guess. The game is won when the correct word is guessed within a certain number of guesses.

## Words Microservice

The Words microservice is a RESTful API that provides a list of words or a single word. The words are used by the Wordle and Hangman microservices to select a word for the game.

## Api Gateway Microservice

The Api Gateway microservice is a RESTful API that provides a single entry point for the Wordle, Hangman, and Words microservices. The Api Gateway microservice is used to route requests to the appropriate microservice.

## Technologies

-   JavaScript (Node.js)
-   Express
-   MySQL

## Installation

1. Clone the repository
2. Install the dependencies
3. Start the server

```bash
git clone https://github.com/WashingtonYandun/Words.git
cd <microservice-name>
npm install
npm start
```
