import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'src/database/entities/product.entity';
import { CreateProductService } from './services/create-product.service';
import { ProductsController } from './controllers/products.controller';
import { FindProductsService } from './services/find-products.service';
import { UpdateProductService } from './services/update-product.service';
import { DeleteProductService } from './services/delete-product.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  providers: [
    CreateProductService,
    FindProductsService,
    UpdateProductService,
    DeleteProductService,
  ],
  controllers: [ProductsController],
})
export class ProductsModule {}
