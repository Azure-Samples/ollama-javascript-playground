// This example demonstrates how to use embeddings to classify a text into
// a vector and search for similar vectors.
//
// We use a different model to generate embeddings for the query and the texts.
// See https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2 for more
// information about the model.
//
// NOTE: To run this example, you must first start the Azure OpenAI emulator by
// running the following command in a terminal and keeping it running:
//
//     ollamazure -d
//

import { AzureOpenAI } from 'openai';
import { LocalIndex } from 'vectra';

const query = "fruit";

const texts = [
  "The red fox jumped over the lazy dog.",
  "A green apple a day keeps the doctor away.",
  "The blue whale is the largest animal in the ocean.",
  "Oranges are rich in vitamin C and taste sweet.",
  "My cat loves playing with a yellow ball.",
  "Bananas are a popular fruit among monkeys.",
  "The black panther moves silently in the night.",
  "The computer screen displayed a vibrant purple background.",
  "Cherries are small, red, and very sweet.",
  "The golden retriever is a friendly and loyal dog."
];

const openai = new AzureOpenAI({
  endpoint: 'http://localhost:4041',

  // Parameters below must be provided but are not used by the local server
  apiKey: '__not_needed_by_ollama__',
  apiVersion: '2024-02-01',
});

// Create a vector database
const index = new LocalIndex('.vectordb');

// Only ingest the texts and generate vectors once
if (!await index.isIndexCreated()) {
  await index.createIndex();

  // Generate vectors for the texts
  const embeddings = await openai.embeddings.create({
    model: 'all-minilm:l6-v2',
    input: texts
  });

  // Insert the vectors into the database
  for (let i = 0; i < texts.length; i++) {
    await index.insertItem({
      vector: embeddings.data[i].embedding,
      metadata: { text: texts[i] }
    });
  }
}

// Transform the query into a vector
const queryEmbedding = await openai.embeddings.create({
  model: 'all-minilm:l6-v2',
  input: query
});
const vector = queryEmbedding.data[0].embedding;

// Search for similar vectors
const results = await index.queryItems(vector, 3);

console.log('Top 3 matches:');
for (const result of results) {
  console.log(`[score: ${result.score}] ${result.item.metadata.text}`);
}
