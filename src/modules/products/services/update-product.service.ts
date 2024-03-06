import { ProductEntity } from 'src/database/entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateProductDto } from '../dto/update-product.dto';

@Injectable()
export class UpdateProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productsRepository: Repository<ProductEntity>,
  ) {}

  async perform({
    id,
    ...input
  }: { id: number } & UpdateProductDto): Promise<ProductEntity> {
    const product = await this.productsRepository.findOne({
      where: { id },
    });

    if (!product) {
      throw new NotFoundException(`Produto com ID "${id}" não encontrado.`);
    }

    Object.assign(product, input);

    await this.productsRepository.save(product);

    return product;
  }
}
