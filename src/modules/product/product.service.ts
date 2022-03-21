import { Injectable } from '@nestjs/common'
import { MySQLProvider } from 'src/database/mysql.provider'

@Injectable()
export class ProductService {
  constructor(private readonly mysql: MySQLProvider) {}
  async findAll(): Promise<any> {
    console.log(this.mysql.getValue())
    return [{ id: 1 }, { id: 2 }]
  }
}