import { SeedPrisma } from '@snaplet/seed/adapter-prisma';
import { defineConfig } from '@snaplet/seed/config';
import { PrismaClient } from '@prisma/client';

// export default defineConfig({
//   adapter: () => {
//     const client = new PrismaClient({
//       datasources: {
//         db: {
//           url: process.env.DATABASE_URL,
//         },@vercel/postgres
//       },
//     });
//     return new SeedPrisma(client);
//   },
//   select: ['!*_prisma_migrations'],
// });

export default defineConfig({
  adapter: () => {
    const client = new PrismaClient();
    return new SeedPrisma(client);
  },
  select: ['!*_prisma_migrations'],
});
