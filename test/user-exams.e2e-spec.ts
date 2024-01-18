// test/user-exams.e2e-spec.ts

import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { UserExamsModule } from '../src/user-exams/user-exams.module';
import { UserExamsService } from '../src/user-exams/user-exams.service';
// Import other necessary modules and services

describe('UserExamsController (e2e)', () => {
  let app: INestApplication;
  let userExamsService = { createUserExam: () => ['test'] };

beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [UserExamsModule],

        // Add other necessary imports like TypeOrmModule, etc.
    })
    .overrideProvider(UserExamsService)
    .useValue(userExamsService)
    .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
});

  it('/user-exams (POST)', () => {
    const userExamData = {
      userId: '123e4567-e89b-12d3-a456-426614174000',
      examId: '123e4567-e89b-12d3-a456-426614174000',
    };

    return request(app.getHttpServer())
      .post('/user-exams')
      .send(userExamData)
      .expect(201)
    .then((response) => {
        expect(response.body).toEqual({
            // Expected response structure
            // ...userExamData,
            id: expect.any(String),
        });
    });
  });

  // Add more tests as needed

  afterAll(async () => {
    await app.close();
  });
});
