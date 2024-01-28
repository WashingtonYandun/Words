import express from "express";
import cors from "cors";
import { router } from "./src/hangman.routes.js";

const PORT = process.env.hangman_port || 3002;
const app = express();

// Enable CORS
app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:8080", "http://localhost:3000", "http://localhost:3001", "http://localhost:3002", "http://localhost:3003"]
    })
);

// Error handler
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send(">> HANGMAN == Something went wrong!");
});

// Middlewares
app.use(express.json());

// Routes
app.use(router);

async function init() {
    try {
        app.listen(PORT);
        console.log(`<< HANGMAN == Listening on port http://localhost:${PORT}>>`);
    } catch (error) {
        console.log("Error");
        console.error(error);
    }
}

await init().then(r => console.log(">> HANGMAN == Init done<<"));
