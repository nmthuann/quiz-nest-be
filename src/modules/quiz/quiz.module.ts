import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionEntity } from '../quiz/domains/entities/question.entity';
import { QuizController } from './controllers/quiz.controller';
import { QuizService } from './services/quiz.service';
import { OptionEntity } from './domains/entities/option.entity';
import { ProStrengthEntity } from './domains/entities/pro-strength.entity';
import { ProTypeEntity } from './domains/entities/pro-type.entity';
import { ProTypeValueEntity } from './domains/entities/pro-type-value.entity';
import { ProValueEntity } from './domains/entities/pro-value.entity';
import { UserEntity } from '../../modules/user/domains/entities/user.entity';
import { ProFigureEntity } from './domains/entities/pro-figure.entity';
import { ProImprovementEntity } from './domains/entities/pro-improvement.entity';
import { QuizEntity } from './domains/entities/quiz.entity';
 
@Module({
  imports: [TypeOrmModule.forFeature([
        QuestionEntity, 
        OptionEntity,
        ProStrengthEntity,
        ProTypeEntity,
        ProTypeValueEntity,
        ProValueEntity,
        ProFigureEntity,
        ProImprovementEntity,
        QuizEntity,
        UserEntity,
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
