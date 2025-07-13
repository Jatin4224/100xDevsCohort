import { initTRPC } from "@trpc/server";
// You can use any variable name you like.
// We use t to keep things simple.
const t = initTRPC.context<{ username?: string }>().create();
export const router = t.router;
export const publicProcedure = t.procedure;
