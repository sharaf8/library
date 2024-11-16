import { Module } from '@nestjs/common';
import { BooksModule } from './modules/books/books.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configurations from './configurations';
import { StudentsModule } from './modules/students/students.module';
import { BorrowModule } from './modules/borrow/borrow.module';
import { BooksEntity } from './modules/books/entities/books.entity';
import { StudentsEntity } from './modules/students/entities/students.entity';
import { BorrowingEntity } from './modules/borrow/entities/borrowing.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configurations],
    }),
    BooksModule,
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get('DB_HOST'),
        port: config.get('DB_PORT'),
        username: config.get('DB_USER'),
        password: config.get('DB_PASSWORD'),
        database: config.get('DB_NAME'),
        entities: [BooksEntity, StudentsEntity, BorrowingEntity],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    StudentsModule,
    BorrowModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
