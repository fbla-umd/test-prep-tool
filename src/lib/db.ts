import { PrismaClient } from '../../prisma/app/generated/prisma/client';
import 'server-only';

// lib/prisma.ts

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
