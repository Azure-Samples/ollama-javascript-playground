// This example demonstrates how to use the OpenAI API to generate text.

import { OpenAI } from "openai";

const openai = new OpenAI({
  baseURL: "http://localhost:11434/v1",
  apiKey: "__not_needed_by_ollama__",
});

const completion = await openai.completions.create({
  model: "phi3",
  prompt: "Say hello in French: ",
});

console.log(completion.choices[0].text);
