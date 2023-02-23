import { Module } from '@nestjs/common';
import { CustomerController } from './controller/customer/customer.controller';
import { CustomerServiceNormal } from './service/customer/customer.service';

@Module({
  imports: [],
  controllers: [CustomerController],
  providers: [CustomerServiceNormal],
})
export class AppModule {}
