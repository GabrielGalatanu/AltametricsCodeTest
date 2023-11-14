import { Controller, Get, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { InvoicesService } from './invoices.service';

@Controller('invoices')
export class InvoicesController {
  constructor(private invoicesService: InvoicesService) {}

  @Get()
  async getAllInvoices(@Req() req: Request) {
    const user = req['user'];
    return this.invoicesService.getAllInvoices(user);
  }

  @Get(':id')
  async getInvoiceById(@Param('id') id: string, @Req() req: Request) {
    const user = req['user'];
    const invoiceId = Number(id);
    return this.invoicesService.getInvoiceById(invoiceId, user);
  }
}
