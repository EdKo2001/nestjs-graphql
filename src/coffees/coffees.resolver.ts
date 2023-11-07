import { ParseIntPipe } from '@nestjs/common';
import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';

import { Coffee } from './entities/coffee.entity/coffee.entity';
import { CreateCoffeeInput } from './dto/create-coffee.input';
import { UpdateCoffeeInput } from './dto/update-coffee.input';
import { CoffeesService } from './coffees.service';

@Resolver()
export class CoffeesResolver {
  constructor(private readonly coffesService: CoffeesService) {}

  @Query(() => [Coffee], { name: 'coffees' })
  async findAll() {
    return this.coffesService.findAll();
  }

  @Query(() => Coffee, { name: 'coffee' })
  async findOne(@Args('id', { type: () => ID }, ParseIntPipe) id: number) {
    return this.coffesService.findOne(id);
  }

  @Mutation(() => Coffee, { name: 'createCoffeee' })
  async create(
    @Args('createCoffeeInput') createCoffeeInput: CreateCoffeeInput,
  ) {
    return this.coffesService.create(createCoffeeInput);
  }

  @Mutation(() => Coffee, { name: 'updateCoffeee' })
  async update(
    @Args('id', ParseIntPipe) id: number,
    @Args('updateCoffeeInput') updateCoffeeInput: UpdateCoffeeInput,
  ) {
    return this.coffesService.update(id, updateCoffeeInput);
  }

  @Mutation(() => Coffee, { name: 'removeCoffeee' })
  async remove(@Args('id', ParseIntPipe) id: number) {
    return this.coffesService.remove(id);
  }
}
