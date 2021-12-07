import { NotFoundException } from "@nestjs/common";
import { CommandHandler } from "@nestjs/cqrs";
import { InjectRepository } from "@nestjs/typeorm";
import { Product } from "src/entity/product.entity";
import { Repository } from "typeorm";
import { DeleteProductCommand } from "../impl/delete-product.command";

@CommandHandler(DeleteProductCommand)
export class DeleteProductHandler
{
    constructor(
      @InjectRepository(Product) private productRepo: Repository<Product>,
    ) {}
    async execute(command: DeleteProductCommand): Promise<any> {

        await this.productRepo.delete(command.id);
    }
  }
