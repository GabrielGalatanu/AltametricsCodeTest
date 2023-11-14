/* eslint-disable prettier/prettier */
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany();
  await prisma.invoice.deleteMany();

  const user1 = await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'test@test.com',
      password: 'password',
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Bob',
      email: 'test2@test.com',
      password: 'password',
    },
  });

  await prisma.invoice.create({
    data: {
      amount: 500,
      dueDate: new Date('2021-01-01'),
      details: 'Invoice for the month of January',
      userId: user1.id,
    },
  });

  await prisma.invoice.create({
    data: {
      amount: 400,
      dueDate: new Date('2021-02-01'),
      details: 'Invoice for the month of February',
      userId: user1.id,
    },
  });

  await prisma.invoice.create({
    data: {
      amount: 100,
      dueDate: new Date('2021-03-01'),
      details: 'Invoice for the month of March',
      userId: user1.id,
    },
  });

  await prisma.invoice.create({
    data: {
      amount: 700,
      dueDate: new Date('2021-04-01'),
      details: 'Invoice for the month of April',
      userId: user1.id,
    },
  });

  await prisma.invoice.create({
    data: {
      amount: 550,
      dueDate: new Date('2021-05-01'),
      details: 'Invoice for the month of May',
      userId: user1.id,
    },
  });

  await prisma.invoice.create({
    data: {
      amount: 600,
      dueDate: new Date('2021-06-01'),
      details: 'Invoice for the month of June',
      userId: user1.id,
    },
  });

  await prisma.invoice.create({
    data: {
      amount: 420,
      dueDate: new Date('2021-07-01'),
      details: 'Invoice for the month of July',
      userId: user1.id,
    },
  });

  await prisma.invoice.create({
    data: {
      amount: 111,
      dueDate: new Date('2021-08-01'),
      details: 'Invoice for the month of August',
      userId: user1.id,
    },
  });

  await prisma.invoice.create({
    data: {
      amount: 900,
      dueDate: new Date('2021-09-01'),
      details: 'Invoice for the month of September',
      userId: user2.id,
    },
  });

  await prisma.invoice.create({
    data: {
      amount: 850,
      dueDate: new Date('2021-10-01'),
      details: 'Invoice for the month of October',
      userId: user2.id,
    },
  });

  await prisma.invoice.create({
    data: {
      amount: 1000,
      dueDate: new Date('2021-11-01'),
      details: 'Invoice for the month of November',
      userId: user2.id,
    },
  });

  await prisma.invoice.create({
    data: {
      amount: 500,
      dueDate: new Date('2021-12-01'),
      details: 'Invoice for the month of December',
      userId: user2.id,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
