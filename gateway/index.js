import express from "express";
import cors from "cors";
import httpProxy from 'http-proxy';

const PORT = 3000;
const app = express();
const apiProxy = httpProxy.createProxyServer();

// Define services URLs
const words = 'http://localhost:3001';
const hangman = 'http://localhost:3002';
const wordle = 'http://localhost:3003';

// Enable CORS
app.use(
    cors({
        credentials: true,
        origin: ["http://localhost:8080", "http://localhost:3001", "http://localhost:3002", "http://localhost:3003"],
    })
);

// Error handler
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send("Something went wrong!");
});

// Middlewares
app.use(express.json());

// API Gateway routes
app.all("/word/*", function (req, res) {
    console.log("Redirecting to words service");
    console.log(req.url);
    apiProxy.web(req, res, { target: words });
});

app.all("/hangman/*", function (req, res) {
    apiProxy.web(req, res, { target: hangman });
});

app.all("/wordle/*", function (req, res) {
    apiProxy.web(req, res, { target: wordle });
});


async function init() {
    try {
        app.listen(PORT);
        console.log(`<< GATEWAY == Listening on port http://localhost:${PORT}>>`);
    } catch (error) {
        console.log("Error");
        console.error(error);
    }
}

await init().then(r => console.log(">> GATEWAY == Init done<<"));
