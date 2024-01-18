// src/user-exams/user-exams.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserExam } from './entities/user-exam.entity';
import { CreateUserExamDto } from './dto/create-user-exam.dto';

@Injectable()
export class UserExamsService {
  constructor(
    @InjectRepository(UserExam)
    private userExamRepository: Repository<UserExam>,
  ) {}

  async createUserExam(createUserExamDto: CreateUserExamDto): Promise<UserExam> {
    // Validate the userId and examId here (e.g., check if the user and exam exist)
    
    // Create a new UserExam
    const userExam = this.userExamRepository.create(createUserExamDto);
    
    // Save the UserExam in the database
    await this.userExamRepository.save(userExam);
    
    return userExam;
  }

  // ... other service methods
}
