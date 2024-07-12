// This example demonstrates how to summarize a large text using a controllable
// level of detail.
//
// NOTE: This example requires more time to run, as it takes a large text as
// input and makes multiple requests to the OpenAI API to summarize it.

import fs from "node:fs";
import { OpenAI } from "openai";

const systemPrompt = `Rewrite this text into a summarized form.`;

// Load a large text
const text = fs.readFileSync("./data/ai_wikipedia.txt", "utf8");

// Split a text into an array of smaller chunks
const chunkText = (text, minChars, delimiter = '.') => {
  const chunks = [];
  let currentChunk = "";
  for (const section of text.split(delimiter)) {
    if (currentChunk.length > minChars) {
      chunks.push(currentChunk);
      currentChunk = "";
    }
    currentChunk += section + delimiter;
  }
  chunks.push(currentChunk);
  return chunks;
};

// Summarize a text using specified detail level
// 0: least detailed, 1: most detailed
const summarize = async (text, detail = 0) => {
  const summaries = [];

  // Interpolate the number of chunks based to get specified level of detail
  const maxChunks = text.split('\n\n').length;
  const numChunks = Math.floor(1 + detail * (maxChunks - 1));

  // Adjust chunk size based on interpolated number of chunks
  const chunkSize = Math.max(1000, Math.floor(text.length / numChunks));
  const chunks = chunkText(text, chunkSize);

  console.log(`Splitting the text into ${chunks.length} chunks to be summarized.`);
  console.log(`Chunk sizes: ${chunks.map((c) => c.length)}`);

  const openai = new OpenAI({
    baseURL: "http://localhost:11434/v1",
    apiKey: "__not_needed_by_ollama__",
  });  

  // Generate summaries for each chunk
  for (const chunk of chunks) {
    const result = await openai.chat.completions.create({
      model: "phi3",
      messages: [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: `Previous summaries:\n\n${summaries.join("\n\n")}\n\nText to summarize next:\n\n${chunk}`,
        },
      ],
    });

    summaries.push(result.choices[0].message.content);
  }

  return summaries.join("\n\n");
};

const summary = await summarize(text, 0.5);

console.log(`Summarized text (${summary.length} chars):`);
console.log(summary);
