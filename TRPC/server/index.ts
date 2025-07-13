import { publicProcedure, router } from "./trpc";
import { createHTTPServer } from "@trpc/server/adapters/standalone";
import { z } from "zod";

// Zod input schema
const todoinputType = z.object({
  title: z.string(),
  description: z.string(),
  done: z.boolean().optional(),
});

// Router definition
const appRouter = router({
  signUp: publicProcedure
    .input(
      z.object({
        email: z.string(),
        password: z.string(),
      })
    )
    .mutation(async (opts) => {
      //context
      const username = opts.ctx.username;
      let email = opts.input.email;
      let password = opts.input.password;
      //do validation
      //do db stuff
      let token = "123";
      return {
        token,
      };
    }),
});
// Create standalone HTTP server
const server = createHTTPServer({
  router: appRouter,
  createContext(opts) {
    let authorHeader = opts.req.headers["authorization"];
    console.log(authorHeader);
    // jwt verify
    return {
      username: "123",
    };
  },
});

server.listen(3000);

// Export the router type for frontend usage
export type AppRouter = typeof appRouter;
