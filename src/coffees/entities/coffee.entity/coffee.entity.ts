import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Coffee model' })
export class Coffee {
  @Field(() => ID, { description: 'A unique indentifier' })
  id: number;
  name: string;
  brand: string;
  flavors: string[];
}
