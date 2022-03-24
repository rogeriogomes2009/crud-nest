import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType()
export class Category {
  @Field()
  id: number

  @Field()
  category: string
}
