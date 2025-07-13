import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../server"; // ✅ Adjust path based on where your server.ts is

// ✅ Create a tRPC client bound to AppRouter for full type safety
const trpc = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:3000", // 🌐 Make sure your server is running here
      headers() {
        return {
          authorization: "Bearer" + localStorage.getItem("token"),
        };
      },
    }),
  ],
});

async function main() {
  try {
    const response = await trpc.signUp.mutate({
      email: "jai@gmail.com", // ✅ Valid email
      password: "123123", // ✅ Valid password (6+ chars as per Zod)
    });

    console.log("✅ Token received:", response.token);
  } catch (err) {
    console.error("❌ Error from server:", err);
  }
}

main();

function helpGirlfriend(level) {
  if (level === 0) {
    console.log("Chain ends. No more girlfriends left 😢");
    return;
  }

  console.log(`Create girlfriend #${level}`);
  console.log(`Take money from #${level} and give it to #${level - 1}`);

  // Call yourself to handle the next one in the chain
  helpGirlfriend(level - 1);
}
