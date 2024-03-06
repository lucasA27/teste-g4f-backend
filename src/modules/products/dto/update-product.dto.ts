import { IsString, IsNumber, IsOptional, Min, IsEnum } from 'class-validator';
import { ProductStatusEnum } from 'src/database/enums/product-status.enum';

export class UpdateProductDto {
  @IsOptional()
  @IsString({ message: 'O campo nome deve ser uma string' })
  name: string;

  @IsOptional()
  @IsString({ message: 'O campo descrição deve ser uma string' })
  description: string;

  @IsOptional()
  @IsEnum(ProductStatusEnum)
  status: ProductStatusEnum;

  @IsOptional()
  @IsNumber({}, { message: 'O campo descrição deve ser uma number' })
  @Min(0)
  price: number;
}
