import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HealthModule } from './health/health.module';
import { UserExamsModule } from './user-exams/user-exams.module';
import { UserExam } from './user-exams/entities/user-exam.entity';
import { Exam } from './entities/exam.entity';
import { Option } from './question/entities/option.entity';
import { Question } from './question/entities/question.entity';
import { UserAnswer } from './entities/user-answer.entity';
import { QuestionModule } from './question/question.module';
import { FileUploadModule } from './upload/module/file-update.module';
const dotenv = require('dotenv');
dotenv.config();
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [UserExam, Exam, Option, Question, UserAnswer],
      synchronize: true,
      autoLoadEntities: true,
    }),
    HealthModule,
    UserExamsModule,
    QuestionModule,
    FileUploadModule
    // ... other modules
  ],
  // ... controllers, providers
})
export class AppModule {}
