import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { GetProductHandler } from './queries/handler/get-product.handler';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from 'src/entity/product.entity';
import { CreateProductHandler } from './commands/handler/create-product.handler';
import { UpdateProductHandler } from './commands/handler/update-product.handler';
import { DeleteProductHandler } from './commands/handler/delete-product.handler';

@Module({
  imports: [CqrsModule, TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  providers: [
    GetProductHandler,
    CreateProductHandler,
    UpdateProductHandler,
    DeleteProductHandler,
  ],
})
export class ProductModule {}
