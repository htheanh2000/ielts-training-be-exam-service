// src/user-exams/dto/create-user-exam.dto.ts

import { ApiProperty } from "@nestjs/swagger";
import { IsUUID, IsNotEmpty } from 'class-validator';

export class CreateUserExamDto {

    @IsUUID()
    @ApiProperty({ 
        description: 'The UUID of the user to enroll in the exam',
        example: '123e4567-e89b-12d3-a456-426614174000' 
    })
    readonly userId: string;

    @IsNotEmpty()
    @IsUUID()
    @ApiProperty({ 
        description: 'The ID of the exam to enroll the user in',
        example: '123e4567-e89b-12d3-a456-426614174000' 
    })
    readonly examId: number;
    // You can add more fields here if needed, like dateTaken, etc.
  }
  