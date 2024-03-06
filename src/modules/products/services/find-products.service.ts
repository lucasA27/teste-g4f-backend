import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/database/entities/product.entity';
import { Repository } from 'typeorm';
import { FindProductDto } from '../dto/find-products.dto';

@Injectable()
export class FindProductsService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async perform(input: FindProductDto): Promise<ProductEntity[]> {
    const { name, price, priceOrder, status, minPrice, maxPrice } = input;

    const query = this.productRepository.createQueryBuilder('product');

    if (name) {
      query.andWhere('product.name ILIKE :name', { name: `%${name}%` });
    }

    if (minPrice !== undefined) {
      query.andWhere('product.price >= :minPrice', { minPrice });
    }

    if (maxPrice !== undefined) {
      query.andWhere('product.price <= :maxPrice', { maxPrice });
    }

    if (price !== undefined) {
      query.andWhere('product.price = :price', { price });
    }

    if (priceOrder) {
      query.orderBy('product.price', priceOrder);
    }

    if (status) {
      console.log(status);

      if (status) {
        query.andWhere('product.status = :status', { status });
      }
    }

    const products = await query.getMany();

    if (products.length === 0) {
      throw new NotFoundException(
        'Nenhum produto encontrado com os critérios fornecidos.',
      );
    }

    return products;
  }
}
