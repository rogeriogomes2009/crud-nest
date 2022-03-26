import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType()
export class Category {
  @Field({ nullable: true })
  id: number

  @Field({ nullable: true })
  category: string
}
