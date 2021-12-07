import { CommandHandler, ICommand, ICommandHandler } from '@nestjs/cqrs';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from 'src/entity/product.entity';
import { Repository } from 'typeorm';
import { CreateProductCommand } from '../impl/create-product.command';

@CommandHandler(CreateProductCommand)
export class CreateProductHandler
  implements ICommandHandler<CreateProductCommand>
{
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}
  async execute(command: CreateProductCommand): Promise<any> {
    var product = new Product();
    
    product.name = command.name;
    product.photo = command.photo;
    product.description = command.description;

    await this.productRepo.insert(product);
  }
}
