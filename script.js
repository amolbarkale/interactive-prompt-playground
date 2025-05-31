import { GoogleGenerativeAI } from "https://esm.run/@google/generative-ai";
import { GEMINI_API_KEY } from "./config.js";

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

document.getElementById("temperature").oninput = (e) => {
  document.getElementById("tempValue").textContent = e.target.value;
};

document.getElementById("presencePenalty").oninput = (e) => {
  document.getElementById("presenceValue").textContent = e.target.value;
};

document.getElementById("frequencyPenalty").oninput = (e) => {
  document.getElementById("frequencyValue").textContent = e.target.value;
};

window.generateContent = async function () {
  const product = document.getElementById("product").value.trim();
  const systemPrompt = document.getElementById("systemPrompt").value.trim();
  const userPrompt = document.getElementById("userPrompt").value.trim();
  const temperature = parseFloat(document.getElementById("temperature").value);
  const maxTokens = parseInt(document.getElementById("maxTokens").value);
  const presencePenalty = parseFloat(document.getElementById("presencePenalty").value);
  const frequencyPenalty = parseFloat(document.getElementById("frequencyPenalty").value);
  const modelName = document.getElementById("model").value;

  const prompt = `${systemPrompt}\n${userPrompt} ${product}`;
  const outputBox = document.getElementById("outputBox");
  outputBox.innerText = "Generating...";

  try {
    const model = genAI.getGenerativeModel({ model: modelName });

    const result = await model.generateContent(prompt, {
      generationConfig: {
        temperature,
        maxOutputTokens: maxTokens,
        presencePenalty,
        frequencyPenalty,
      },
    });

    const response = await result.response;
    outputBox.innerText = response.text();
  } catch (err) {
    console.error("Generation Error:", err);
    outputBox.innerText = "Error: " + err.message;
  }
};
