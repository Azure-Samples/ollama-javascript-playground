import { OpenAI } from 'openai';

const openai = new OpenAI({
  baseURL: 'http://localhost:11434/v1',
  apiKey: '__not_needed_by_ollama__',
});

const embeddings = await openai.embeddings.create({
  input: ['Once upon a time', 'The end.']
});

for (const embedding of embeddings.data) {
  console.log(embedding.embedding.slice(0, 3));
}
