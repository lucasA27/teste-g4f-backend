import { IsString, IsOptional, IsIn, IsEnum } from 'class-validator';
import { ProductStatusEnum } from 'src/database/enums/product-status.enum';

export class FindProductDto {
  @IsOptional()
  @IsString({ message: 'O campo nome deve ser uma string' })
  name: string;

  @IsOptional()
  @IsString({ message: 'O campo descrição deve ser uma string' })
  description: string;

  @IsOptional()
  @IsEnum(ProductStatusEnum, {
    message: 'o status deve ser ACTIVE ou DISABLED',
  })
  status: ProductStatusEnum;

  @IsOptional()
  @IsString({ message: 'O campo preço deve ser uma string' })
  price: number;

  @IsOptional()
  @IsString({ message: 'O campo de preço minimo deve ser uma string' })
  minPrice: number;

  @IsOptional()
  @IsString({ message: 'O campo de preço máximo deve ser uma string' })
  maxPrice: number;

  @IsOptional()
  @IsIn(['ASC', 'DESC'], {
    message:
      'O campo preço deve ser "ASC" para ascendente ou "DESC" para descendente',
  })
  priceOrder: 'ASC' | 'DESC';
}
