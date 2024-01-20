// src/entities/user-answer.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { UserExam } from '../user-exams/entities/user-exam.entity';
import { Question } from '../question/entities/question.entity';
import { Option } from '../question/entities/option.entity';

@Entity()
export class UserAnswer {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => UserExam, userExam => userExam.id)
  userExam: UserExam;

  @ManyToOne(() => Question, question => question.id)
  question: Question;

  @ManyToOne(() => Option, option => option.id)
  option: Option;

  @Column()
  isCorrect: boolean;
}
