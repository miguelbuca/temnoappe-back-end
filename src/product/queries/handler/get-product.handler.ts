import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entity/product.entity';
import { Repository } from 'typeorm';
import { GetProductQuery } from '../impl/get-product.query';

@QueryHandler(GetProductQuery)
export class GetProductHandler implements IQueryHandler<GetProductQuery> {
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}

  async execute({ param }: GetProductQuery): Promise<Product[] | {}> {
    if (!Object.keys(param).length) {
      return await this.productRepo.find();
    }

    const query = this.productRepo.createQueryBuilder();

    

    if (param.start) {
      
    }

    if (param.length) {
      
    }

    if (param.field) {
      
    }

    if (param.sort) {
      
    }

    if (param.search) {
      
    }
    
    return {
      data: query.getMany()
    }
  }
}
