import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InvoicesController } from './invoices/invoices.controller';
import { PrismaService } from './prisma/prisma.service';
import { UsersController } from './users/users.controller';
import { AuthMiddleware } from './auth/auth.middleware';
import { UsersService } from './users/users.service';
import { InvoicesService } from './invoices/invoices.service';

@Module({
  imports: [],
  controllers: [AppController, InvoicesController, UsersController],
  providers: [AppService, PrismaService, UsersService, InvoicesService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes(InvoicesController);
  }
}
