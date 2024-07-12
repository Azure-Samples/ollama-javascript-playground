// This example demonstrates how to use the OpenAI API to chat with a model.

import { OpenAI } from "openai";

const openai = new OpenAI({
  baseURL: "http://localhost:11434/v1",
  apiKey: "__not_needed_by_ollama__",
});

const chatCompletion = await openai.chat.completions.create({
  model: "phi3",
  messages: [{ role: "user", content: "Say hello!" }],
});

console.log(chatCompletion.choices[0].message.content);
