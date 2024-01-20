// src/controllers/file-upload.controller.ts

import { Controller, Post, UseInterceptors, UploadedFile, HttpException, HttpStatus } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileUploadService } from '../services/file-upload.service';
import { ApiConsumes, ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller('upload')
export class FileUploadController {
  constructor(private readonly fileUploadService: FileUploadService) {}

  @Post('pdf')
  @UseInterceptors(FileInterceptor('file', new FileUploadService().getMulterConfig()))
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiResponse({ status: 200, description: 'PDF file uploaded successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  uploadPdf(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      throw new HttpException('PDF file upload failed.', HttpStatus.BAD_REQUEST);
    }
    return { message: 'PDF file uploaded successfully.', filename: file.filename };
  }
}
