import express from "express";

const PORT = 3000;
const app = express();

// Enable CORS
app.use(
    cors({
        credentials: true,
        origin: FRONTEND_URL || "http://localhost:8080",
    })
);

// Error handler
app.use((error, req, res, next) => {
    console.error(error);
    res.status(500).send("Something went wrong!");
});

// Middlewares
app.use(express.json());
app.use(morgan("dev"));


async function init() {
    try {
        app.listen(PORT);
        console.log(`<<Listening on port http://localhost:${PORT}>>`);
        console.log(`<<Environment: ${NODE_ENV}>>`);
    } catch (error) {
        console.log("Error");
        console.error(error);
    }
}

await init().then(r => console.log(">>Init done<<"));
