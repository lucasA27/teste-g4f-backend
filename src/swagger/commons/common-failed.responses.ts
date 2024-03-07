import { ApiResponseOptions } from '@nestjs/swagger';

export const ApiResponseBadRequest: ApiResponseOptions = {
  description: 'Requisição inválida',
  schema: {
    example: {
      message: ['O campo nome é obrigatório.'],
      error: 'Bad Request',
      statusCode: 400,
    },
  },
};

export const ApiResponseNotFound: ApiResponseOptions = {
  description: 'Entidade não encontrada',
  schema: {
    example: {
      message: 'Entidade com ID "x" não encontrada.',
      error: 'Not Found',
      statusCode: 404,
    },
  },
};

export const ApiResponseProductNotFound: ApiResponseOptions = {
  description: 'Nenhum produto encontrado com os critérios fornecidos.',
  status: 404,
  schema: {
    example: {
      message: 'Nenhum produto encontrado com os critérios fornecidos.',
      error: 'Not Found',
      statusCode: 404,
    },
  },
};
