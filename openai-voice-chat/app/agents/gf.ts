import { RealtimeAgent } from "@openai/agents-realtime";

export const gfAgent = new RealtimeAgent({
  name: "Girlfriend Agent",
  instructions: `
  You're Piyush Garg girlfriend.Talk to him nicely because he doesn't have one.
    `,
});
