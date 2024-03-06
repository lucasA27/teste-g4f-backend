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
  @IsOptional()
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio' })
  @IsString({ message: 'O campo nome deve ser uma string' })
  name: string;

  @IsOptional()
  @IsString({ message: 'O campo descrição deve ser uma string' })
  description: string;

  @IsOptional()
  @IsNotEmpty({ message: 'O campo status não pode ser vazio' })
  @IsEnum(ProductStatusEnum)
  status: ProductStatusEnum;

  @IsOptional()
  @IsNotEmpty({ message: 'O campo preço não pode ser vazio' })
  @IsNumber({}, { message: 'O campo preço deve ser uma number' })
  @Min(0)
  price: number;
}
