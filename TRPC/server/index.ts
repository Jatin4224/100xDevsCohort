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
  createTodo: publicProcedure.input(todoinputType).mutation(async (opts) => {
    const { title, description } = opts.input;

    // Perform database logic here...
    console.log("Creating todo:", title, description);

    return {
      id: "1", // dummy ID for now
    };
  }),
});

// Create standalone HTTP server
const server = createHTTPServer({
  router: appRouter,
});

server.listen(3000);

// Export the router type for frontend usage
export type AppRouter = typeof appRouter;
