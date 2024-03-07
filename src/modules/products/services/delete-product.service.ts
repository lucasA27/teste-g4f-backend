import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/database/entities/product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeleteProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async perform(id: number): Promise<void> {
    const result = await this.productRepository.softDelete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Produto com ID "${id}" não encontrado.`);
    }
  }
}
