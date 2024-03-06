import { ProductEntity } from 'src/database/entities/product.entity';
import { CreateProductDto } from '../dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productsRepository: Repository<ProductEntity>,
  ) {}

  async perform(input: CreateProductDto): Promise<ProductEntity> {
    const product = this.productsRepository.create(input);

    await this.productsRepository.save(product);

    return product;
  }
}
