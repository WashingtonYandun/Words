import express from "express";
import cors from "cors";
import { router } from "./src/wordle.routes.js";

const PORT = process.env.wordle_port || 3003;
const app = express();

// Enable CORS
app.use(
    cors({
        credentials: true,
        origin: ["https://words-g.vercel.app"]
    })
);

// Error handler
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send(">> WORDLE == Something went wrong!");
});

// Middlewares
app.use(express.json());

// Routes
app.use(router);

async function init() {
    try {
        app.listen(PORT);
        console.log(`<< WORDLE == Listening on port http://localhost:${PORT}>>`);
    } catch (error) {
        console.log("Error");
        console.error(error);
    }
}

await init().then(r => console.log(">> WORDLE == Init done<<"));
