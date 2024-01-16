import express from "express";
import cors from "cors";


const PORT = 3000;
const app = express();

// Enable CORS
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:8080",
    })
);

// Error handler
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send("Something went wrong!");
});

// Middlewares
app.use(express.json());

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
