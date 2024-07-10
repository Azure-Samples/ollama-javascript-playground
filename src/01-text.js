import { OpenAI } from 'openai';

const openai = new OpenAI({
  baseURL: 'http://localhost:11434/v1',
  apiKey: '__not_needed_by_ollama__',
});

const completion = await openai.completions.create({
  prompt: 'Say hello in French: '
});

console.log(completion.choices[0].text);
