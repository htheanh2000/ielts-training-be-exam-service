// src/entities/question.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Exam } from './exam.entity';
import { Option } from './option.entity';

@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Exam, exam => exam.questions)
  exam: Exam;

  @Column()
  questionText: string;

  @Column()
  questionType: string;

  @Column()
  difficultyLevel: string;

  @OneToMany(() => Option, option => option.question)
  options: Option[];
}
