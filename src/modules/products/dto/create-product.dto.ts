import { IsString, IsNumber, Min, IsDefined } from 'class-validator';

export class CreateProductDto {
  @IsDefined({ message: 'O campo nome é obrigátorio.' })
  @IsString({ message: 'O campo nome deve ser uma string' })
  name: string;

  @IsDefined({ message: 'O campo descrição é obrigátorio.' })
  @IsString({ message: 'O campo descrição deve ser uma string' })
  description: string;

  @IsDefined({ message: 'O campo preço é obrigátorio.' })
  @IsNumber({}, { message: 'O campo preço deve ser um number' })
  @Min(0)
  price: number;
}
