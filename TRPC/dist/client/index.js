"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// 📦 Import client and transport link from @trpc/client
const client_1 = require("@trpc/client");
// 🚀 Create the tRPC client instance and pass the AppRouter type
// This allows full autocompletion and type safety from backend to frontend
const trpc = (0, client_1.createTRPCClient)({
    links: [
        (0, client_1.httpBatchLink)({
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
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let response = yield trpc.createTodo.mutate({
            title: "go to gym", // ✅ Required string (Zod-validated)
            description: "hit the gym", // ✅ Required string (Zod-validated)
            // ❌ If you forget a field added on backend, TS will warn here
        });
        console.log(response); // 👉 You’ll get proper response type hints too
    });
}
main();
// ✅ Summary:
// - createTRPCClient<AppRouter>() binds frontend to backend
// - Any change in backend types (input/output) auto-reflects here
// - No manual API client, fetch calls, or Swagger needed
