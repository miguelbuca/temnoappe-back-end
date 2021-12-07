import { NotFoundException } from "@nestjs/common";
import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/entity/product.entity";
import { Repository } from "typeorm";
import { UpdateProductCommand } from "../impl/update-product.command";

@CommandHandler(UpdateProductCommand)
export class UpdateProductHandler implements ICommandHandler<UpdateProductCommand>
{
  constructor(
    @InjectRepository(Product) private productRepo: Repository<Product>,
  ) {}
  async execute(command: UpdateProductCommand): Promise<any> {
    const product = await this.productRepo.findOne(command.id);
    if (!product)
      throw new NotFoundException('Product is not found');
    
      await this.productRepo.update(command.id, {
          ...product,
          ...command
    });
  }
}
