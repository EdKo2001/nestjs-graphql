import { InputType, Field } from '@nestjs/graphql';

@InputType({ description: 'Create coffee input onject type.' })
export class CreateCoffeeInput {
  @Field(() => String, { description: 'A new coffee name' })
  name: string;
  brang: string;
  flavors: string[];
}
