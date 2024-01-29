import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const PORT = process.env.gateway_port || 3000;

app.use(bodyParser.json());

// Define services URLs
const words = 'https://words-w.vercel.app/word';
const hangman = 'https://words-h.vercel.app/hangman';
const wordle = 'https://words-wl.vercel.app/wordle';

app.post('/word/:endpoint', async (req, res) => {
    try {
        const { endpoint } = req.params;
        const response = await axios.post(`${words}/${endpoint}`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error at words service' });
    }
});

app.post('/hangman/:endpoint', async (req, res) => {
    try {
        const { endpoint } = req.params;
        const response = await axios.post(`${hangman}/${endpoint}`, req.body);
        console.log(response.data)
        res.json(response.data);
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error at hangman service' });
    }
});

app.post('/wordle/:endpoint', async (req, res) => {
    try {
        const { endpoint } = req.params;
        const response = await axios.post(`${wordle}/${endpoint}`, req.body);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error en el servicio de wordle' });
    }
});

async function init() {
    try {
        app.listen(PORT);
        console.log(`<< GATEWAY == Listening on port ${PORT}>>`);
    } catch (error) {
        console.log("Error");
        console.error(error);
    }
}

await init().then(r => console.log(">> GATEWAY == Init done<<"));
