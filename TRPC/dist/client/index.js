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
const client_1 = require("@trpc/client");
// ✅ Create a tRPC client bound to AppRouter for full type safety
const trpc = (0, client_1.createTRPCClient)({
    links: [
        (0, client_1.httpBatchLink)({
            url: "http://localhost:3000", // 🌐 Make sure your server is running here
        }),
    ],
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield trpc.signUp.mutate({
                email: "jai@gmail.com", // ✅ Valid email
                password: "123123", // ✅ Valid password (6+ chars as per Zod)
            });
            console.log("✅ Token received:", response.token);
        }
        catch (err) {
            console.error("❌ Error from server:", err);
        }
    });
}
main();
