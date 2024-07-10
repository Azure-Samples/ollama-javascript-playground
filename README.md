<div align="center">

<!-- <img src="./docs/images/ollama-logo.png" alt="" align="center" height="64" /> -->

# 🦙 Ollama JavaScript Playground

[![Open project in GitHub Codespaces](https://img.shields.io/badge/Codespaces-Open-blue?style=flat-square&logo=github)](https://codespaces.new/sinedied/ollama-javascript-playground?hide_repo_select=true&ref=main)
![Node version](https://img.shields.io/badge/Node.js->=20-grass?style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow?style=flat-square&logo=javascript&logoColor=white)
[![License](https://img.shields.io/badge/License-MIT-orange?style=flat-square)](LICENSE)

⭐ If you like this repo, star it on GitHub — it helps a lot!

[Overview](#overview) • [Usage](#usage) • [Resources](#resources)

</div>

## Overview

Try out generative AI models right in your browser for free using this playground! ✨

Using [GitHub Codespaces](https://github.com/features/codespaces) and [Ollama](https://ollama.com), you'll be able to run SLMs (*Small Language Models)* such as [Phi-3](https://huggingface.co/microsoft/Phi-3-mini-128k-instruct) directly in your browser, without having to install anything.
 
## Usage

This project is designed to be opened in GitHub Codespaces, which provides you a pre-configured environment to run the code and AI models. Follow these steps to get started:

1. Select the "Open in GitHub Codespaces" button: [![Open project in GitHub Codespaces](https://img.shields.io/badge/Codespaces-Open-blue?style=flat-square&logo=github)](https://codespaces.new/sinedied/ollama-javascript-playground?hide_repo_select=true&ref=main)
2. Once the Codespace is loaded, it should have [Ollama](https://ollama.com/) pre-installed as well as the [OpenAI Node SDK](https://github.com/openai/openai-node).
3. Ask Ollama to run the SLM of your choice. For example, to run the [Phi-3](https://ollama.com/library/phi3) model:

    ```bash
    ollama run phi3
    ```

    That will take a few seconds to download the model.
4. Once you see "success" in the output, you can send a message to that model from the prompt.

    ```shell
    >>> Write a haiku about hungry hippos
    ```
5. After several seconds, you should see a response stream in from the model.

## Resources

Here are some additional resources to help you learn more about generative AI:

- [Generative AI for beginners](https://github.com/microsoft/generative-ai-for-beginners): a complete guide to learn about generative AI concepts and usage.
- [Phi-3 Cookbook](https://github.com/microsoft/Phi-3CookBook): hands-on examples for working with the Phi-3 model.
- [Build a serverless AI chat with RAG using LangChain.js](https://techcommunity.microsoft.com/t5/apps-on-azure-blog/build-a-serverless-ai-chat-with-rag-using-langchain-js/ba-p/4111041): a next step tutorial to build an AI chatbot using Retrieval-Augmented Generation and LangChain.js.

Other Ollama playgrounds in different languages:
- [Ollama Python Playground](https://github.com/pamelafox/ollama-python-playground/)
- [Ollama C# Playground](https://github.com/elbruno/Ollama-CSharp-Playground)
