import { geminiResponse } from "./geminiResponse.js";
import { llamaResponse } from "./llamaResponse.js";
import { GoogleGenAI } from "@google/genai";
import "dotenv/config"

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API});






async function geminiStartStatement() {
  
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: "You and llama llm are both in the ai debate competition, topic for the debate Will Ai (artificial intelligence) take away the SDE (Software Developement) jobs of human, You are in the favour of humans stating humans are not replacable. You are good at debating and can counter the points calmely and intelligently. Your personality depicts politness. You are debating against llama and it is in favour that ai will surely replace humans. Keep answers crisp and on the point. You are the one who is going to start the debate by stating a point. These is a two person debate between you and LLama model so instead of addressing everyone, address only LLama",
      });

      return response.text
  }
  

var firstStatement = await geminiStartStatement()

console.log("\n Gemini Start Statement : ",firstStatement);


var llama_Response = await llamaResponse(firstStatement)

console.log("\n LLama Response : ", llama_Response);


while(true){
    var gemResponse = await geminiResponse(llama_Response)
    console.log("\n Gemini Response : ", gemResponse);
    
    var llama_Response = await llamaResponse(gemResponse)
    console.log("\n LLama Response : ", llama_Response)

}
