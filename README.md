🧪 Interactive Prompt Playground
An in-browser AI tool to experiment with text generation using the Gemini API. This playground allows you to control model parameters and observe how they affect the AI-generated product descriptions in real time.

🚀 Quick Start
📦 Prerequisites

A browser that supports ES Modules (modern Chrome, Firefox, Edge)
A Gemini API key from Google AI Studio
Local server to avoid CORS issues (Live Server, http-server, or Python)

🛠 Setup Steps

Clone or download this repository
```
git clone https://github.com/amolbarkale/interactive-prompt-playground.git
cd interactive-prompt-playground
```

Create your API configuration
Create a file named config.js in the project root:
export const GEMINI_API_KEY = "YOUR_API_KEY_HERE";

Secure your API key
Add ```config.js``` to ```.gitignore``` to prevent accidental commits

Start a local server
Install the Live Server extension
Right-click index.html and select "Open with Live Server"




🎯 Features
✅ Custom Prompts

Enter a system prompt to define the assistant's behavior
Enter a user prompt + product name for the query to describe

✅ Gemini Model Selection

Uses gemini-2.0-flash-001 model (configurable from dropdown)
Support for multiple Gemini model variants

✅ Adjustable Parameters
Control the behavior and output style of the model:
Parameter Range Description Temperature 0.0 - 2.0 Controls creativity (0 = strict, 2 = wild)Max Tokens1 - 1000 Maximum words/tokens the model will generatePresence Penalty 0.0 - 1.0 Discourages reuse of ideas Frequency Penalty 0.0 - 1.0 Discourages repetition of words

✅ Real-Time Output

Results displayed in a formatted box below the form
Each new request clears previous output
Clean, readable formatting


📌 Example Usage
System Prompt:
You are a professional product copywriter. Write concise, factual descriptions.

User Prompt:
Write a short product description for: Redmi Note 9
Parameters:

Temperature: 0.2
Max Tokens: 100
Frequency Penalty: 0.5

Output:
Redmi Note 9 features a 6.53" FHD+ display, a 48MP AI quad camera, and a 5020mAh battery. 
Powered by MediaTek Helio G85, it supports fast charging and runs MIUI based on Android.

📁 Project Structure
interactive-prompt-playground/
├── index.html          # Main UI interface
├── script.js           # Logic for calling Gemini API
├── config.js           # 🔐 Your local API key
├── .gitignore          # Git ignore rules
└── README.md           # This documentation

⚙️ Configuration
Model Parameters Explained

Temperature: Higher values make output more random and creative
Max Tokens: Limits the length of generated responses
Presence Penalty: Reduces likelihood of repeating topics
Frequency Penalty: Reduces likelihood of repeating specific words

Supported Models

gemini-2.0-flash-001 (default)
Additional models can be added to the dropdown in index.html


Ensure you're running a local server, not opening the HTML file directly
Use http://localhost URLs, not file:// URLs

API Key Issues

Verify your API key is valid at Google AI Studio
Check that config.js exports the key correctly
Ensure config.js is in the project root directory

No Response from API

Check browser console for error messages
Verify internet connection
Ensure API quotas haven't been exceeded

