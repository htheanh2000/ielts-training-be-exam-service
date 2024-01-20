// src/dtos/question.dto.ts

import { IsNotEmpty, IsString, IsInt, IsEnum, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { OptionDto } from './option.dto'; // Assuming you have an OptionDto

export enum DifficultyLevel {
  EASY = 'Easy',
  MEDIUM = 'Medium',
  HARD = 'Hard',
}

export class QuestionDto {
  @ApiProperty({ description: 'Text of the question', example: 'What is 2+2?' })
  @IsNotEmpty()
  @IsString()
  readonly questionText: string;

  @ApiProperty({ description: 'Type of the question', example: 'Multiple Choice' })
  @IsNotEmpty()
  @IsString()
  readonly questionType: string;

  @ApiProperty({ enum: DifficultyLevel, description: 'Difficulty level of the question' })
  @IsEnum(DifficultyLevel)
  readonly difficultyLevel: DifficultyLevel;

  @ApiProperty({ type: [OptionDto], description: 'List of options for the question' })
  @ValidateNested({ each: true })
  @Type(() => OptionDto)
  readonly options: OptionDto[];
}
