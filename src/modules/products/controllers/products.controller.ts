import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Put,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateProductService } from '../services/create-product.service';
import { CreateProductDto } from '../dto/create-product.dto';
import { FindProductDto } from '../dto/find-products.dto';
import { FindProductsService } from '../services/find-products.service';
import { UpdateProductDto } from '../dto/update-product.dto';
import { UpdateProductService } from '../services/update-product.service';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly createProductsService: CreateProductService,
    private readonly findProductsService: FindProductsService,
    private readonly updatedProductService: UpdateProductService,
  ) {}

  @Post('create')
  create(@Body() data: CreateProductDto) {
    return this.createProductsService.perform(data);
  }

  @Get()
  async findProducts(@Query() data: FindProductDto) {
    return await this.findProductsService.perform(data);
  }

  @Put('update/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateProductDto,
  ) {
    console.log(id);

    return this.updatedProductService.perform({ id, ...data });
  }
}
