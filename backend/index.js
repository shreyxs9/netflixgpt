require("dotenv").config();
const express = require('express');
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const { GoogleGenerativeAI } = require("@google/generative-ai");

// Initialize Google Generative AI
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// Middleware
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true
}));
app.use((req, res, next) => {
    res.setHeader("Content-Security-Policy", "script-src 'self' 'unsafe-eval' blob:;");
    next();
});

// Basic API endpoint
app.get('/api', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});


// Movie Recommendation Endpoint
app.post("/gemini", async (req, res) => {
    const { prompt } = req.body.data;

    if (!prompt || typeof prompt !== "string") {
        return res.status(400).json({ error: "Invalid prompt provided. Please send a valid string." });
    }

    const gptPrompt = `Now act as a movie recommendation app and suggest me movies based on the given genre ${prompt}. Give me just 5 suggestions with just movie titles, for example: movie1, movie2, movie3, movie4, movie5.`;

    try {
        const result = await model.generateContent(gptPrompt);
       
        const responseText = result.response?.text();
        if (!responseText) {
            throw new Error("No content returned from the AI model.");
        }

        res.json({ recommendations: responseText });
    } catch (error) {
        console.error("Error generating content:", error);
        res.status(500).json({ error: "Failed to generate content. Please try again later." });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
