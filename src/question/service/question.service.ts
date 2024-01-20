// src/services/question.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Question } from '../entities/question.entity';
import { QuestionDto } from '../dto/question.dto';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(Question)
    private readonly questionRepository: Repository<Question>,
  ) {}

  async create(questionDto: QuestionDto): Promise<Question> {
    const question = this.questionRepository.create(questionDto); // Create a new question with the provided DTO
    return this.questionRepository.save(question); // Save the new question in the database
  }

  // ... other service methods
}
