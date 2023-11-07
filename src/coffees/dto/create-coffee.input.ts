import { InputType, Field } from '@nestjs/graphql';
import { MinLength } from 'class-validator';

@InputType({ description: 'Create coffee input onject type.' })
export class CreateCoffeeInput {
  @MinLength(3)
  @Field(() => String, { description: 'A new coffee name' })
  name: string;
  brand: string;
  flavors: string[];
}
