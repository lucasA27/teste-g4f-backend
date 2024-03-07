import { ApiResponseOptions } from '@nestjs/swagger';

export const ApiResponseSuccessCreate: ApiResponseOptions = {
  status: 201,
  description: 'Produto criado com sucesso.',
  schema: {
    example: {
      id: 1,
      name: 'Cadeira Gamer Ergonômica',
      description:
        'Confortável e ergonômica, ideal para longas sessões de jogos ou trabalho.',
      price: 500,
      createdAt: '2024-03-07T04:33:59.132Z',
      updatedAt: '2024-03-07T04:33:59.132Z',
    },
  },
};

export const ApiResponseSuccessUpdate: ApiResponseOptions = {
  status: 200,
  description: 'Produto atualizado com sucesso.',
  schema: {
    example: {
      id: 1,
      name: 'Cadeira Gamer Ergonômica',
      description:
        'Confortável e ergonômica, ideal para longas sessões de jogos ou trabalho.',
      price: 500,
      createdAt: '2024-03-07T04:33:59.132Z',
      updatedAt: '2024-03-07T04:33:59.132Z',
    },
  },
};

export const ApiResponseSuccessDelete: ApiResponseOptions = {
  status: 200,
  description: 'Produto deletado com sucesso.',
  schema: {
    example: {
      message: 'Produto deletado com sucesso.',
    },
  },
};

export const ApiResponseSuccessFind: ApiResponseOptions = {
  status: 200,
  description: 'Produtos encontrados.',
  schema: {
    example: [
      {
        id: 7,
        name: 'Monitor LED 24 polegadas',
        description:
          'Monitor LED de 24 polegadas com resolução Full HD e tempo de resposta de 1ms.',
        price: 12000,
        status: 'ACTIVE',
        createdAt: '2024-03-06T21:23:51.598Z',
        updatedAt: '2024-03-06T21:23:51.598Z',
        deletedAt: null,
      },
      {
        id: 8,
        name: 'Headset Gamer 7.1',
        description:
          'Headset gamer com som surround 7.1, microfone com cancelamento de ruído e iluminação LED.',
        price: 25000,
        status: 'ACTIVE',
        createdAt: '2024-03-06T21:25:05.318Z',
        updatedAt: '2024-03-06T21:25:05.318Z',
        deletedAt: null,
      },
      {
        id: 4,
        name: 'ssd 128gb',
        description: 'ssd com espaço de 128gb.',
        price: 10000,
        status: 'ACTIVE',
        createdAt: '2024-03-06T21:21:50.249Z',
        updatedAt: '2024-03-07T03:54:44.654Z',
        deletedAt: null,
      },
    ],
  },
};
