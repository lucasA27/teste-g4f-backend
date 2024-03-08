import {
  Controller,
  Post,
  Body,
  Get,
  Query,
  Delete,
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
import { DeleteProductService } from '../services/delete-product.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ProductEntity } from 'src/database/entities/product.entity';
import {
  ApiResponseBadRequest,
  ApiResponseNotFound,
  ApiResponseProductNotFound,
} from 'src/swagger/commons/common-failed.responses';
import {
  ApiResponseSuccessCreate,
  ApiResponseSuccessFind,
  ApiResponseSuccessUpdate,
} from 'src/swagger/commons/common-success.responses';
import { Pagination } from 'nestjs-typeorm-paginate';
import { FindProductByIdService } from '../services/find-product-by-id.service';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly createProductsService: CreateProductService,
    private readonly findProductsService: FindProductsService,
    private readonly updatedProductService: UpdateProductService,
    private readonly deleteProductService: DeleteProductService,
    private readonly findProductById: FindProductByIdService,
  ) {}

  @ApiOperation({ summary: 'Criar um novo produto' })
  @ApiResponse(ApiResponseSuccessCreate)
  @ApiResponse(ApiResponseBadRequest)
  @Post('create')
  async create(@Body() data: CreateProductDto): Promise<ProductEntity> {
    return this.createProductsService.perform(data);
  }

  @ApiResponse(ApiResponseSuccessFind)
  @ApiResponse(ApiResponseProductNotFound)
  @Get()
  async findProducts(
    @Query() data: FindProductDto,
  ): Promise<Pagination<ProductEntity>> {
    return await this.findProductsService.perform(data);
  }

  @Get(':id')
  async findProduct(@Param('id', ParseIntPipe) id: number) {
    return this.findProductById.perform(id);
  }

  @ApiResponse(ApiResponseSuccessUpdate)
  @ApiResponse(ApiResponseNotFound)
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() data: UpdateProductDto,
  ): Promise<ProductEntity> {
    return this.updatedProductService.perform({ id, ...data });
  }

  @ApiResponse({ status: 200, description: 'Produto deletado com sucesso' })
  @Delete(':id')
  async deleteProduct(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.deleteProductService.perform(id);
  }
}
