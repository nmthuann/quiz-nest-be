import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AnswerEntity } from './domains/entities/answer.entity';
import { QuestionEntity } from './domains/entities/question.entity';
import { UserParticipantEntity } from './domains/entities/user-participant.entity';
import { ResultEntity } from './domains/entities/result.entity';
import { UserAnswerEntity } from './domains/entities/user-answer.entity';
import { QuizController } from './controllers/quiz.controller';
import { QuizService } from './services/quiz.service';
 
@Module({
  imports: [TypeOrmModule.forFeature([
      UserParticipantEntity, 
      AnswerEntity, 
      QuestionEntity, 
      ResultEntity, 
      UserAnswerEntity
    ])
  ],
  controllers: [
    QuizController
  ],
  exports: ['IQuizService'],
   providers: [
    {
      provide: 'IQuizService',
      useClass: QuizService,
    },
   ]
})
export class QuizModule {}
