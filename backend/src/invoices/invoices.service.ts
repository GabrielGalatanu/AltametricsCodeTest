import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '../utils/types';

@Injectable()
export class InvoicesService {
  constructor(private prismaService: PrismaService) {}

  async getAllInvoices(user: User) {
    const invoices = await this.prismaService.invoice.findMany({
      where: { userId: user.id },
      select: { id: true, amount: true, dueDate: true },
    });

    return invoices;
  }

  async getInvoiceById(id: number, user: User) {
    const invoice = await this.prismaService.invoice.findUnique({
      where: { id },
    });

    if (!invoice)
      throw new HttpException('Invoice not found', HttpStatus.NOT_FOUND);

    if (invoice.userId !== user.id)
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);

    return invoice;
  }
}
