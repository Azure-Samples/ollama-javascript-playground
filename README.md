<div align="center">

<img src="./docs/images/playground.png" alt="" align="center" height="128" />

# Ollama JavaScript Playground

[![Open project in GitHub Codespaces](https://img.shields.io/badge/Codespaces-Open-blue?style=flat-square&logo=github)](https://codespaces.new/Azure-Samples/ollama-javascript-playground?hide_repo_select=true&ref=main&quickstart=true)
![Node version](https://img.shields.io/badge/Node.js-20+-grass?style=flat-square)
![JavaScript](https://img.shields.io/badge/JavaScript-yellow?style=flat-square&logo=javascript&logoColor=white)
[![License](https://img.shields.io/badge/License-MIT-orange?style=flat-square)](LICENSE)

⭐ If you like this repo, star it on GitHub — it helps a lot!

[Overview](#overview) • [Usage](#usage) • [Run the samples](#run-the-samples) • [Next steps](#next-steps) • [Resources](#resources)

</div>

## Overview

Try out generative AI models right in your browser for free using this playground! ✨

Using [GitHub Codespaces](https://github.com/features/codespaces) and [Ollama](https://ollama.com), you'll be able to run SLMs (*Small Language Models)* such as [Phi-3](https://huggingface.co/microsoft/Phi-3-mini-128k-instruct) directly in your browser, without having to install anything.
 
## Usage

This project is designed to be opened in GitHub Codespaces, which provides you a pre-configured environment to run the code and AI models. Follow these steps to get started:

1. Click on the "Codespaces: Open" button:<br>[![Open project in GitHub Codespaces](https://img.shields.io/badge/Codespaces-Open-blue?style=flat-square&logo=github)](https://codespaces.new/Azure-Samples/ollama-javascript-playground?hide_repo_select=true&ref=main&quickstart=true)
2. Once the Codespace is loaded, it should have [Ollama](https://ollama.com/) pre-installed as well as the [OpenAI Node SDK](https://github.com/openai/openai-node).
3. Ask Ollama to run the SLM of your choice. For example, to run the [Phi-3](https://ollama.com/library/phi3) model:

    ```bash
    ollama run phi3
    ```

    That will take a few seconds to load the model.
4. Once you see `>>>` in the output, you can send a message to that model from the prompt.

    ```shell
    >>> Write a haiku about a furry kitten
    ```
5. After several seconds, you should see a response stream in from the model.
6. Close the model by typing `/bye` and pressing Enter.
7. Open the file `ollama.ipynb` in the editor and follow the instructions.

> [!TIP]
> While you're following the instructions of the interactive notebook, you can run the code cells by clicking on the "Execute cell" (▶️) button in the top left corner of the cell. You can also edit the code and run it again to see how the model responds to different inputs.
> ![Screenshot of a code cell highlighting the "executing cell" button](./docs/images/execute-cell.png)

## Run the samples

In the [samples](./samples) folder of this repository, you'll find examples of how to use generative AI models using the OpenAI Node.js SDK. You can run them by executing the following command in the terminal:

```bash
tsx samples/<filename>
```

Alternatively, you can open a sample file in the editor and run it directly by clicking the "Run" (▶️) button in the top right corner of the editor.

> [!IMPORTANT]
> Some samples requires you to start the Azure OpenAI emulator first. You can do so by running the following command in a terminal and keeping it running while you run the samples:
> ```bash
> ollamazure -d
> ```

## Next steps

Once you're comfortable with this playground, you can explore more advanced topics and tutorials:
- [Generative AI for beginners](https://github.com/microsoft/generative-ai-for-beginners) [course]: a complete guide to learn about generative AI concepts and usage.
- [Generative AI with JavaScript](https://github.com/microsoft/generative-ai-with-javascript) [tutorials, videos, samples]: a collection of resources to learn about generative AI with JavaScript.
- [Phi-3 Cookbook](https://github.com/microsoft/Phi-3CookBook) [tutorials, samples]: hands-on examples for working with the Phi-3 model.

When you're ready to explore how you can deploy generative using Azure, you should check out these resources:
- [Quickstart: Get started using GPT-35-Turbo and GPT-4 with Azure OpenAI Service](https://learn.microsoft.com/azure/ai-services/openai/chatgpt-quickstart?tabs=command-line%2Cpython-new&pivots=programming-language-javascript) [tutorial]: a tutorial to get started with Azure OpenAI Service.
- [Build a serverless AI chat with RAG using LangChain.js](https://techcommunity.microsoft.com/t5/apps-on-azure-blog/build-a-serverless-ai-chat-with-rag-using-langchain-js/ba-p/4111041) [sample]: a next step tutorial to build an AI chatbot using Retrieval-Augmented Generation and LangChain.js.

## Resources

Here are some additional resources to help you learn more about generative AI:
- [Awesome Generative AI](https://github.com/steven2358/awesome-generative-ai) [links]: a curated list of resources about generative AI.
- [Fundamentals of Responsible Generative AI](https://learn.microsoft.com/training/modules/responsible-generative-ai/) [course]: a training module to learn about the responsible use of generative AI.
- [Azure AI Studio](https://ai.azure.com/) [tool]: a web portal to create, train, deploy and experiment with AI models.

### Other playgrounds in different languages:
- [Ollama Python Playground](https://github.com/pamelafox/ollama-python-playground/)
- [Ollama C# Playground](https://github.com/elbruno/Ollama-CSharp-Playground)
