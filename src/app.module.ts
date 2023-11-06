import { Module } from '@nestjs/common';
import { join } from 'path';

import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    CoffeesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
