import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CategoryInput {
  @Field({ nullable: true })
  id: number

  @Field({ nullable: true })
  category: string
}
