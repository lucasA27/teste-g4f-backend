import {
  IsString,
  IsNumber,
  Min,
  IsDefined,
  IsNotEmpty,
} from 'class-validator';

export class CreateProductDto {
  @IsDefined({ message: 'O campo nome é obrigátorio.' })
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio' })
  @IsString({ message: 'O campo nome deve ser uma string' })
  name: string;

  @IsDefined({ message: 'O campo descrição é obrigátorio.' })
  @IsString({ message: 'O campo descrição deve ser uma string' })
  description: string;

  @IsDefined({ message: 'O campo preço é obrigátorio.' })
  @IsNumber({}, { message: 'O campo preço deve ser um number' })
  @IsNotEmpty({ message: 'O campo preço não pode ser vazio' })
  @Min(0)
  price: number;
}
