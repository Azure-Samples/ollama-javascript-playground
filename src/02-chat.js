import { AzureOpenAI } from 'openai';

const openai = new AzureOpenAI({
  endpoint: 'http://localhost:4041',
  deployment: 'phi3',
  apiVersion: '2024-02-01',
  apiKey: '__not_needed_by_ollama__'
});

const chatCompletion = await openai.chat.completions.create({
  messages: [{ role: 'user', content: 'Say hello!' }]
});

console.log(chatCompletion.choices[0].message.content);
