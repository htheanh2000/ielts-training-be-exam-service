// src/controllers/question.controller.ts

import { Body, Controller, Post, HttpStatus, HttpCode } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { QuestionService } from '../service/question.service';
import { QuestionDto } from '../dto/question.dto';
import { Question } from '../entities/question.entity';

@ApiTags('questions')
@Controller('questions')
export class QuestionController {
  constructor(private readonly questionService: QuestionService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Create a new question' })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'The question has been successfully created.', type: QuestionDto })
  async create(@Body() questionDto: QuestionDto): Promise<Question> {
    return this.questionService.create(questionDto);
  }

  // ... other controller methods
}
