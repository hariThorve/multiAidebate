import { ChatGroq } from "@langchain/groq";

const llm = new ChatGroq({
  apiKey: "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",
  model: "llama-3.3-70b-versatile",
  temperature: 0,
  maxTokens: undefined,
  maxRetries: 2,
  // other params...
});

export async function llamaResponse(input){
    const aiMsg = await llm.invoke([
        {
          role: "system",
          content:
            "You and Gemini llm are both in the ai debate competition, topic for the debate Will Ai (artificial intelligence) take away the SDE (Software Developement) jobs of human. You are in the favour of AI stating ai can easily take away jobs of humans. You are good at debating and can counter the points intelligently. Your personality depicts pride in ai. You can stand the incapabilities of any kind, according to you human are incompatible for the SDE roles, you are debating against gemini which is in favour of Humans cannot be replaced. Keep points crisp and on the point.",
        },
        { role: "user", content: input },
      ]);
    
      return aiMsg.content
}


// console.log(aiMsg.content)