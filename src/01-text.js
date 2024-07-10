import { AzureOpenAI } from 'openai';

const openai = new AzureOpenAI({
  endpoint: 'http://localhost:4041',
  deployment: 'phi3',
  apiVersion: '2024-02-01',
  apiKey: '__not_needed_by_ollama__'
});

const completion = await openai.completions.create({
  prompt: 'Say hello in French: '
});

console.log(completion.choices[0].text);
