import { ApiProperty } from '@nestjs/swagger';
import {
  IsString,
  IsNumber,
  Min,
  IsDefined,
  IsNotEmpty,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty({ description: 'Nome do produto', example: 'Cadeira Gamer' })
  @IsDefined({ message: 'O campo nome é obrigátorio.' })
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio' })
  @IsString({ message: 'O campo nome deve ser uma string' })
  name: string;

  @ApiProperty({
    description: 'Descrição do produto',
    example: 'Confortável e ergonômica',
  })
  @IsDefined({ message: 'O campo descrição é obrigátorio.' })
  @IsString({ message: 'O campo descrição deve ser uma string' })
  description: string;

  @ApiProperty({ description: 'Preço do produto', example: 5000 })
  @IsDefined({ message: 'O campo preço é obrigátorio.' })
  @IsNumber({}, { message: 'O campo preço deve ser um number' })
  @IsNotEmpty({ message: 'O campo preço não pode ser vazio' })
  @Min(0)
  price: number;
}
