import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import { Category } from './dto/category'
import { CategoryInput } from './dto/category.input'
import { CategoryService } from './category.service'

@Resolver((of) => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}
  @Query((returns) => [Category], { name: 'getAllCategories' })
  async getAllCategories(): Promise<Category[]> {
    const categories = await this.categoryService.findAll()
    const categoriesToReturn = categories.map((category) => {
      const categoryToReturn = new Category()
      categoryToReturn.id = category.id
      categoryToReturn.category = category.category

      return categoryToReturn
    })
    return categoriesToReturn
  }

  @Query((returns) => Category)
  async category(@Args('id') id: string): Promise<Category> {
    const category = await this.categoryService.findById(id)
    const categoryToReturn = new Category()
    categoryToReturn.id = category.id
    categoryToReturn.category = category.category
    return categoryToReturn
  }

  @Mutation((returns) => Category, { name: 'createCategory' })
  async create(@Args('input') input: CategoryInput): Promise<Category> {
    return this.categoryService.create(input)
  }
}
