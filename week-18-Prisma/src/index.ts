import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

async function createUser() {
  await client.user.create({
    data: {
      username: "Jai",
      password: "jatinsh",
      age: 21,
    },
  });
}

createUser();
