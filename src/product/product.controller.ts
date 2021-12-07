import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateProductCommand } from './commands/impl/create-product.command';
import { DeleteProductCommand } from './commands/impl/delete-product.command';
import { UpdateProductCommand } from './commands/impl/update-product.command';
import { Query as qr } from './product';
import { GetProductQuery } from './queries/impl/get-product.query';

@Controller('product')
export class ProductController {
  constructor(private queryBus: QueryBus, private commandBus: CommandBus) {}
  @Get('all')
  async index(@Query() reqParam: qr) {
    return await this.queryBus.execute(new GetProductQuery(reqParam));
  }
  @Post('add')
  @HttpCode(201)
  @UsePipes(new ValidationPipe({ transform: true }))
  async save(@Body() payload: CreateProductCommand) {
    return await this.commandBus.execute(payload);
  }
  @Put('edit/:id')
  @HttpCode(200)
  @UsePipes(new ValidationPipe({ transform: true }))
  async edit(@Body() payload: UpdateProductCommand, @Param() reqParam) {
    payload.id = reqParam?.id;
    return await this.commandBus.execute(payload);
  }
  @Delete('delete/:id')
  @HttpCode(200)
  @UsePipes(new ValidationPipe({ transform: true }))
  async delete(@Param() reqParam: DeleteProductCommand) {
    return await this.commandBus.execute(reqParam);
  }
}
