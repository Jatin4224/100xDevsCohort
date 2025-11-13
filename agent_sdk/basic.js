import "dotenv/config";
import { Agent, run, tool } from "@openai/agents";
import { z } from "zod";
import { RECOMMENDED_PROMPT_PREFIX } from "@openai/agents-core/extensions";
//creating a tool
const getCurrentTime = tool({
  name: "get_current_time",
  description: "This tool returns the current time",
  parameters: z.object({}), //we have to give model a schema //zod is validation lib
  async execute() {
    return new Date().toString();
  },
});

//TOOL 2
const getMenuTool = tool({
  name: "get_menu",
  description: "Fetches and returns get menu items",
  parameters: z.object({}),
  async execute() {
    return {
      Drinks: {
        chai: "INR 50",
        Coffe: "INR 70",
      },
      veg: {
        DalMakhni: "INR 250",
        Panner: "INR 400",
      },
    };
  },
});

//providing cookingAgent tool
const cookingAgent = new Agent({
  name: "Cooking Agent",
  model: "gpt-4.1-mini",
  tools: [getCurrentTime, getMenuTool],
  instructions: `
  You're a helpfull cooking assistant who is specialized in cooking food.
  You help the users with food options and receipes and help them cook food
    `,
});

const codingAgent = new Agent({
  name: "Coding Agent",
  instructions: `
    You are an expert coding assistant particullarly in Javascript
    `,
  tools: [cookingAgent.asTool()],
});

const gatewayAgent = new Agent.create({
  name: "Triage Agent",
  instructions: `
   ${RECOMMENDED_PROMPT_PREFIX}
   You are assistant
  `,
  handoffs: [codingAgent, cookingAgent],
});

async function chatWithAgent(query) {
  const result = run(gatewayAgent, query);
  console.log("History", result.history);
  console.log("Hand Off Too", result.lastAgent.name);
  console.log(result.finalOutput);
}

chatWithAgent("I want to cook a choco cake");
