// src/entities/option.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Question } from './question.entity';

@Entity()
export class Option {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Question, question => question.options)
  question: Question;

  @Column()
  optionText: string;

  @Column()
  isCorrect: boolean;
}
