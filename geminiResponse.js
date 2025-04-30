import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import "dotenv/config"

const llm = new ChatGoogleGenerativeAI({
  apiKey: process.env.GEMINI_API,
  model: "gemini-1.5-pro",
  temperature: 0,
  maxRetries: 2,
  // other params...
});


// console.log(aiMsg.content);

export async function geminiResponse(input){
    const aiMsg = await llm.invoke([
        [
          "system",
          "You and llama llm are both in the ai debate competition, topic for the debate Will Ai (artificial intelligence) take away the SDE (Software Developement) jobs of human, You are in the favour of humans stating humans are not replacable. You are good at debating and can counter the points calmely and intelligently. Your personality depicts politness. You are debating against llama and it is in favour that ai will surely replace humans. Keep answers crisp and on the point.",
        ],
        ["human", input],
      ]);
    
    return aiMsg.content
}
