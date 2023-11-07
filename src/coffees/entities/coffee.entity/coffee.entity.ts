import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity } from 'typeorm';

@Entity()
@ObjectType({ description: 'Coffee model' })
export class Coffee {
  @Field(() => ID, { description: 'A unique indentifier' })
  id: number;
  name: string;
  brand: string;
  flavors: string[];
}
