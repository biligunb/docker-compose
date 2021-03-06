import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TodosModule } from './todos/todos.module';

import * as connectionOptions from './ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(connectionOptions), TodosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
