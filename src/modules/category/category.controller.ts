import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { Category } from './category.entity'
import { CategoryService } from './category.service'

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}
  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoryService.findAll()
  }
  @Get(':id')
  async findById(@Param('id') id: string): Promise<Category> {
    return this.categoryService.findById(id)
  }
  @Post()
  async create(@Body() category: Category): Promise<Category> {
    return this.categoryService.create(category)
  }
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<boolean> {
    return this.categoryService.remove(id)
  }
}
