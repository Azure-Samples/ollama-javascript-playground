// This example demonstrates how to extract structured information from a
// a given input text using a JSON schema.

import { OpenAI } from "openai";

const openai = new OpenAI({
  baseURL: "http://localhost:11434/v1",
  apiKey: "__not_needed_by_ollama__",
});

const systemPrompt = `You are a data extraction tool that extracts structured JSON information from the user input using this JSON schema:

{
  // The sentiment of the text
  "sentiment": "positive" | "neutral" | "negative",
  // How aggressive the text is on a scale from 1 to 10
  "aggressiveness": 1-10,
  // The language the text is written in
  "language": "string"
}`;

const input = `Cet exemple est pas trop mal!`;

const result = await openai.chat.completions.create({
  model: "phi3",
  messages: [
    { role: "system", content: systemPrompt },
    { role: "user", content: input },
  ],
  response_format: {
    type: "json_object",
  },
});

console.log(result.choices[0].message.content);
