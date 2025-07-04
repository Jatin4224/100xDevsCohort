// 📦 Import client and transport link from @trpc/client
import { createTRPCClient, httpBatchLink } from "@trpc/client";

// 🧠 Import only the type of your router from server (no runtime cost)
import type { AppRouter } from "../server";

// 🚀 Create the tRPC client instance and pass the AppRouter type
// This allows full autocompletion and type safety from backend to frontend
const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000", // 🌐 Your tRPC server URL
    }),
  ],
});

// 🧵 Explanation:
// - AppRouter is exported from the backend (server.ts)
// - It contains definitions of all your procedures (like createTodo)
// - By passing it here, the frontend knows what input/output types to expect

// 🤖 Now you can call your backend procedure with types auto-inferred
// If the server expects a new field (e.g. `done`), TypeScript will catch it
async function main() {
  let response = await trpc.createTodo.mutate({
    title: "go to gym", // ✅ Required string (Zod-validated)
    description: "hit the gym", // ✅ Required string (Zod-validated)
    // ❌ If you forget a field added on backend, TS will warn here
  });

  console.log(response); // 👉 You’ll get proper response type hints too
}
main();

// ✅ Summary:
// - createTRPCClient<AppRouter>() binds frontend to backend
// - Any change in backend types (input/output) auto-reflects here
// - No manual API client, fetch calls, or Swagger needed
