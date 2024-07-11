import { OpenAI } from "openai";

const openai = new OpenAI({
  baseURL: "http://localhost:11434/v1",
  apiKey: "__not_needed_by_ollama__",
});

const chatCompletion = await openai.chat.completions.create({
  model: "phi3",
  messages: [
    {
      role: "user",
      content: 'Say hello 5 different languages. Answer in JSON using { "<language>": "<result>" } format.',
    },
  ],
  response_format: {
    type: "json_object",
  },
});

console.log(chatCompletion.choices[0].message.content);
