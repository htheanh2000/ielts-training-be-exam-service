// src/entities/exam.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { UserExam } from '../user-exams/entities/user-exam.entity';
import { Question } from './question.entity';

@Entity()
export class Exam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  date: Date;

  @Column()
  totalQuestions: number;

  @Column()
  totalScore: number;

  @Column()
  passingScore: number;

  @OneToMany(() => UserExam, userExam => userExam.exam)
  userExams: UserExam[];

  @OneToMany(() => Question, question => question.exam)
  questions: Question[];
}
