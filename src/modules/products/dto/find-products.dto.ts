import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsOptional, IsIn, IsEnum } from 'class-validator';
import { ProductStatusEnum } from 'src/database/enums/product-status.enum';

export class FindProductDto {
  @ApiProperty({
    description: 'ID do produto',
    required: false,
    example: 10,
  })
  @IsOptional()
  id: number;

  @ApiProperty({
    description: 'Nome do produto',
    required: false,
    example: 'Cadeira Gamer',
  })
  @IsOptional()
  @IsString({ message: 'O campo nome deve ser uma string' })
  name: string;

  @ApiProperty({
    description: 'Descrição do produto',
    required: false,
    example: 'Confortável e ergonômica',
  })
  @IsOptional()
  @IsString({ message: 'O campo descrição deve ser uma string' })
  description: string;

  @ApiProperty({
    description: 'status do produto',
    example: ProductStatusEnum.IN_STOCK,
    required: false,
  })
  @IsOptional()
  @IsEnum(ProductStatusEnum, {
    message: 'o status deve ser ACTIVE ou DISABLED',
  })
  status: ProductStatusEnum;

  @ApiProperty({
    description: 'Status do produto',
    required: false,
    example: ProductStatusEnum.IN_STOCK,
    enum: ProductStatusEnum,
  })
  @IsOptional()
  @IsString({ message: 'O campo preço deve ser uma string' })
  price: number;

  @ApiProperty({
    description: 'Preço mínimo do produto',
    required: false,
    example: 1000,
  })
  @IsOptional()
  @IsString({ message: 'O campo de preço minimo deve ser uma string' })
  minPrice: number;

  @ApiProperty({
    description: 'Preço máximo do produto',
    required: false,
    example: 100000,
  })
  @IsOptional()
  @IsString({ message: 'O campo de preço máximo deve ser uma string' })
  maxPrice: number;

  @ApiProperty({
    description: 'Ordenação do preço',
    required: false,
    example: 'ASC',
    enum: ['ASC', 'DESC'],
  })
  @IsOptional()
  @IsIn(['ASC', 'DESC'], {
    message:
      'O campo preço deve ser "ASC" para ascendente ou "DESC" para descendente',
  })
  priceOrder: 'ASC' | 'DESC';

  @IsOptional()
  @IsString({ message: 'O campo pagina deve ser uma string' })
  page: number;

  @IsOptional()
  @IsString({ message: 'O campo limite deve ser uma string' })
  limit: number;
}
