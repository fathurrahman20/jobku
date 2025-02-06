// const { PrismaClient } = require("@prisma/client");
// const data = require("./mock_data.json");
import { PrismaClient } from "@prisma/client";
import data from "./mock_data.json";

const prisma = new PrismaClient();

async function main() {
  const clerkId = "user_2sbhMemKCFKEpQgv2JzsnNGZYsD";
  const jobs = data.map((job) => {
    return {
      ...job,
      clerkId,
    };
  });
  for (const job of jobs) {
    await prisma.job.create({
      data: job,
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
