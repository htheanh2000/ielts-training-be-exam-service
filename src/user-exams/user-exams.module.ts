// src/user-exams/user-exams.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserExam } from './entities/user-exam.entity';
import { UserExamsService } from './user-exams.service';
import { UserExamsController } from './user-exams.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UserExam])],
  controllers: [UserExamsController], // Make sure the controller is listed here
  providers: [UserExamsService],
})
export class UserExamsModule {}
