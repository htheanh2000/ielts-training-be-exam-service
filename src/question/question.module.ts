// src/modules/question.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionService } from './service/question.service';
import { QuestionController } from './controller/question.controller';
import { Question } from './entities/question.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Question]), // This line makes the repository available
  ],
  providers: [QuestionService],
  controllers: [QuestionController],
})
export class QuestionModule {}
