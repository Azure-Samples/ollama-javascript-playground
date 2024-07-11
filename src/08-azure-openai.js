import { AzureOpenAI } from 'openai';

const openai = new AzureOpenAI({
  endpoint: 'http://localhost:4041',

  // Parameters below must be provided but are not used by the local server
  apiKey: '__not_needed_by_ollama__',
  apiVersion: '2024-02-01',
});

// Chat completion
const chatCompletion = await openai.chat.completions.create({
  model: 'phi3',
  messages: [{ role: 'user', content: 'Say hello!' }]
});

console.log(chatCompletion.choices[0].message.content);

// Embeddings
const embeddings = await openai.embeddings.create({
  model: 'all-minilm:l6-v2',
  input: ['Once upon a time', 'The end.']
});

for (const embedding of embeddings.data) {
  console.log(embedding.embedding.slice(0, 3));
}
