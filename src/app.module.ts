import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [DatabaseModule, ProductsModule],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
