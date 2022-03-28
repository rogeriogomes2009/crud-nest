import { Inject, Injectable } from '@nestjs/common'
import { MySQLProvider } from 'src/database/mysql.provider'
import { Category } from './category.entity'

@Injectable()
export class CategoryService {
  constructor(@Inject('DATABASE') private readonly mysql: MySQLProvider) {}
  async findAll(): Promise<Category[]> {
    const conn = await this.mysql.getConnection()
    const [results] = await conn.query('select * from categories')
    const resultsPlain = JSON.parse(JSON.stringify(results))
    const categories = resultsPlain.map((category) => {
      const categoryEntity = new Category()
      categoryEntity.id = category.id
      categoryEntity.category = category.category
      return categoryEntity
    })
    return categories
  }
  async findById(id: string): Promise<Category> {
    const conn = await this.mysql.getConnection()
    const [results] = await conn.query('select * from category where id = ?', [
      id,
    ])
    const resultsPlain = JSON.parse(JSON.stringify(results))
    const categories = resultsPlain.map((category) => {
      const categoryEntity = new Category()
      categoryEntity.id = category.id
      categoryEntity.category = category.category

      return categoryEntity
    })
    return categories[0]
  }

  async create(entity: Category): Promise<Category> {
    const conn = await this.mysql.getConnection()
    await conn.query('insert into categories (category, id) values (?, ?)', [
      entity.category,
      entity.id,
    ])
    return entity
  }
  async remove(id: string): Promise<boolean> {
    const conn = await this.mysql.getConnection()
    await conn.query('delete from category where id = ? limit 1', [id])
    return true
  }
}
