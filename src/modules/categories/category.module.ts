import { Module } from '@nestjs/common'
import { CategoryController } from './category.controller'
import { CategoryResolver } from './category.resolver'
import { CategoryService } from './category.service'
@Module({
  controllers: [CategoryController],
  providers: [CategoryService, CategoryResolver],
})
export class CategoryModule {}
