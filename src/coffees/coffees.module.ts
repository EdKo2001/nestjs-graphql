import { Module } from '@nestjs/common';
import { CoffeesResolver } from './coffees.resolver';

@Module({
  providers: [CoffeesResolver],
})
export class CoffeesModule {}
