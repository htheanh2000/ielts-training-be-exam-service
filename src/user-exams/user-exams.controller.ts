// src/user-exams/user-exams.controller.ts

import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiResponse, ApiOperation } from '@nestjs/swagger';
import { CreateUserExamDto } from './dto/create-user-exam.dto';
import { UserExamsService } from './user-exams.service';

@ApiTags('User Exams')
@Controller('user-exams')
export class UserExamsController {
    constructor(private readonly userExamsService: UserExamsService) {}
  @Post()
  @ApiOperation({ summary: 'Enroll user in an exam' })
  @ApiResponse({ status: 201, description: 'User enrolled successfully.' })
  @ApiResponse({ status: 400, description: 'Invalid input data.' })
  async createUserExam(@Body() createUserExamDto: CreateUserExamDto) {
    return this.userExamsService.createUserExam(createUserExamDto);
  }

  // ... other endpoints
}
