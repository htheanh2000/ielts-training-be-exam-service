// src/upload/file-upload.module.ts

import { Module } from '@nestjs/common';
import { FileUploadController } from '../controllers/file-upload.controller';
import { FileUploadService } from '../services/file-upload.service';
@Module({
  controllers: [FileUploadController],
  providers: [FileUploadService],

})
export class FileUploadModule {}
