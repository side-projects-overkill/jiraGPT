import express, { json } from "express";
import axios from "axios";
import "dotenv/config";
import logger from "./utils/logger.js";

const app = express();
const PORT = process.env.LOCAL_HOST_PORT || 3001;
const Model = process.env.MODEL;
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello from AI Model Server");
});

// POST route for '/api/generate'
app.post("/api/generate", async (req, res) => {
  try {
    const { promptText } = req.body;
    // Make sure to handle undefined or null values for optional fields
    const requestBody = {
      model: Model,
      prompt: `Create a Jira for the following Topic ${promptText}. NOTE: THE RESPONSE SHOULD NOT HAVE NEWLINE CHARS AND ONLY TITLE AND DESCRIPTION`,
      system: `you are an advanced AI model to create text for jiras and your name is DJ Rotaz.     
        In the Response I need the below parameters - Title, Description.
        Response should be in JSON Format.
        JSON Format Example: {"Title": "A Jira Title",  "Description": "This is a description something"},`,
      stream: false,
      raw: false,
    };

    const response = await axios.post(
      "http://0.0.0.0:11434/api/generate",
      requestBody,
    );
    // Send back the response from the external API to the client
    const trimResponse = response.data.response
      .replace(/\\/g, "")
      .match(/\{[^{}]*\}/)[0];
    res.send(trimResponse);
  } catch (error) {
    // Handle errors
    console.error("Error:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.listen(PORT, () => {
  logger.info(`Our server is up and running on Port ${PORT}`);
});
