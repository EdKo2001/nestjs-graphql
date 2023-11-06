import { ParseIntPipe } from '@nestjs/common';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Coffee } from './entities/coffee.entity/coffee.entity';
import { CreateCoffeeInput } from './dto/create-coffee.input';

@Resolver()
export class CoffeesResolver {
  @Query(() => [Coffee], { name: 'coffees' })
  async findAll() {
    return [];
  }

  @Query(() => Coffee, { name: 'coffee' })
  async findOne(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return null;
  }

  @Mutation(() => Coffee, { name: 'createCoffeee' })
  async create(
    @Args('createCoffeeInput') createCoffeeInput: CreateCoffeeInput,
  ) {
    return null;
  }
}
