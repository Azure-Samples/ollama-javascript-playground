import { AzureOpenAI } from 'openai';

const openai = new AzureOpenAI({
  endpoint: 'http://localhost:4041',
  deployment: 'all-minilm:l6-v2',
  apiVersion: '2024-02-01',
  apiKey: '__not_needed_by_ollama__'
});

const embeddings = await openai.embeddings.create({
  input: ['Once upon a time', 'The end.']
});

for (const embedding of embeddings.data) {
  console.log(embedding.embedding.slice(0, 3));
}
