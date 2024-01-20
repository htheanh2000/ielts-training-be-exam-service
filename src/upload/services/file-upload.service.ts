// src/services/file-upload.service.ts

import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { diskStorage } from 'multer';

@Injectable()
export class FileUploadService {
  getMulterConfig() {
    const storage = diskStorage({
      destination: './uploads/pdf-files', // Set the destination for storing files
      filename: (req, file, callback) => {
        const fileExt = file.originalname.split('.').pop();
        const fileName = `${uuidv4()}.${fileExt}`; // Generate a unique filename
        callback(null, fileName);
      },
    });

    return {
      storage,
      fileFilter: (_req, file, callback) => {
        if (!file.originalname.match(/\.(pdf)$/)) {
          // Only allow files with .pdf extension
          return callback(new Error('Only PDF files are allowed!'), false);
        }
        callback(null, true);
      },
      limits: {
        fileSize: 5 * 1024 * 1024, // Limit file size to 5MB
      },
    };
  }
}
