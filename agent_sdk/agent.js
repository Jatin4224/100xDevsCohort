import "dotenv/config";
import { Agent, run, tool } from "@openai/agents";
import { z } from "zod";

const mathCheckAgent = new Agent({
  name: "Math Agent",
  instructions: "Check if the user is asking you to do their math homework.",
  outputType: z.object({
    isMathHomework: z
      .boolean()
      .describe("Set this to true if its a math homework"),
  }),
});

//if user talks about maths -> trip
const checkMathInput = {
  name: "Math Input Gaurdrail",
  execute: async ({ input }) => {
    //process this input
    const result = await run(mathCheckAgent, input);
    console.log(`😭: User is asking ${input}`);
    return {
      tripwireTriggered: true,
    };
  },
};

const customerSupportAgent = new Agent({
  name: "Customer Support Agent",
  instructions: `
    You're a helpful customer support agent
    `,
  inputGuardrails: [checkMathInput],
});

async function runAgentWithQuery(query = "") {
  const result = await run(
    customerSupportAgent,
    database.concat({ role: "user", content: query })
  );
  console.log(result.finalOutput);
}

runAgentWithQuery("My name is Piyush");
