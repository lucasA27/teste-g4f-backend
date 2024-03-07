import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  IsOptional,
  Min,
  IsEnum,
  IsNotEmpty,
} from 'class-validator';
import { ProductStatusEnum } from 'src/database/enums/product-status.enum';

export class UpdateProductDto {
  @ApiProperty({ description: 'Nome do produto', example: 'Cadeira Gamer' })
  @IsOptional()
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio' })
  @IsString({ message: 'O campo nome deve ser uma string' })
  name: string;

  @ApiProperty({
    description: 'Descrição do produto',
    example: 'Confortável e ergonômica',
  })
  @IsOptional()
  @IsString({ message: 'O campo descrição deve ser uma string' })
  description: string;

  @ApiProperty({
    description: 'status do produto',
    example: ProductStatusEnum.IN_STOCK,
  })
  @IsOptional()
  @IsNotEmpty({ message: 'O campo status não pode ser vazio' })
  @IsEnum(ProductStatusEnum)
  status: ProductStatusEnum;

  @ApiProperty({ description: 'Preço do produto', example: 5000 })
  @IsOptional()
  @IsNotEmpty({ message: 'O campo preço não pode ser vazio' })
  @IsNumber({}, { message: 'O campo preço deve ser uma number' })
  @Min(0)
  price: number;
}
