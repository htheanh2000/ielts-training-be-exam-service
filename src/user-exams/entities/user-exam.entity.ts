// src/entities/user-exam.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, IsNull } from 'typeorm';
import { Exam } from '../../entities/exam.entity';

@Entity()
export class UserExam {
  @PrimaryGeneratedColumn()
  id: number;

  // Instead of a direct relationship, store the UserID as a UUID string
  @Column({ type: 'uuid' })
  userId: string;

  @ManyToOne(() => Exam, exam => exam.userExams)
  @JoinColumn({ name: 'examId' })
  exam: Exam;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  dateTaken: Date;

  @Column({nullable: true, default: 0})
  score: number;

  @Column({nullable: true, default: 0})
  result: boolean;

  // ... other columns as needed
}
