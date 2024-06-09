import {    Injectable,  } from '@nestjs/common';// Inject,
// import { IQuestionRepository } from '../repositories/question.repository';
// import { IAnswerRepository } from '../repositories/answers.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { UserAnswerEntity } from '../domains/entities/user-answer.entity';
import { ResultEntity } from '../domains/entities/result.entity';
import { Repository } from 'typeorm';
import { QuestionEntity } from '../domains/entities/question.entity';
import { createUserAnswerDto } from '../domains/dtos/create-user-answer.dto';
import { UserParticipantEntity } from '../domains/entities/user-participant.entity';
import { AnswerEntity } from '../domains/entities/answer.entity';
import { FashionStyle } from '../enum/rule.enum';
import { PointRange } from '../enum/point-range.enum';

export interface IQuizService {
    getQuiz(): Promise<QuestionEntity[] | null>;
    doQuiz(userId: string, data: createUserAnswerDto[]): Promise<ResultEntity | null>;
    viewResult(id: string);
}

// create Quiz:
// create quiz -> lấy id
// create Quiz Detail -> ghi id get ở trên vào


@Injectable()
export class QuizService implements IQuizService{

    constructor(
        // @Inject('IQuestionRepository')
        // public readonly questionRepository: IQuestionRepository,
        // @Inject('IAnswerRepository')
        // public readonly answerRepository: IAnswerRepository,

        @InjectRepository(QuestionEntity)
        public readonly questionRepository: Repository<QuestionEntity>,
        @InjectRepository(AnswerEntity)
        public readonly answerRepository: Repository<AnswerEntity>,
        @InjectRepository(UserAnswerEntity)
        public readonly userAnswerRepository: Repository<UserAnswerEntity>,
        @InjectRepository(ResultEntity)
        public readonly resultRepository: Repository<ResultEntity>,
        @InjectRepository(UserParticipantEntity)
        public readonly userParticipantRepository: Repository<UserParticipantEntity>,
    ) {
    }


    async getQuiz():Promise<QuestionEntity[] | null> {
        return await this.questionRepository.find({ relations: ['answers'] });
    }

    async doQuiz(useId: string, data: createUserAnswerDto[]): Promise<ResultEntity | null> {
        
        const findUser = await this.userParticipantRepository.findOne({
            where: {
                id: useId,
            },
        });

        const newResult = new ResultEntity();
        newResult.totalPoint = 0;
        newResult.completeTime = new Date();
        newResult.user = findUser || null;
        const resultCreated = await this.resultRepository.save(newResult);

        for (const userAnswer of data) {
        
            const findAnswer = await this.answerRepository.findOne({
                where: {
                    id: userAnswer.answerId 
                }
            });

            const findQuestion = await this.questionRepository.findOne({
                where: {
                    id: userAnswer.questionId 
                }
            });



            // Tạo bản ghi UserAnswerDetail
            // const userAnswerDetail = this.createUserAnswer(resultCreated, findAnswer, findQuestion);
            const createUserAnswer = this.userAnswerRepository.create({
                result: resultCreated,
                answer: findAnswer,
                question: findQuestion,
                
            });

            await this.userAnswerRepository.save(createUserAnswer);
        }
        
        return resultCreated;
    }


    async viewResult(id: string) {
        const result = await this.resultRepository.findOne({
            where: { id },
            relations: ['userAnswers', 'userAnswers.answer'],
        });

        if (!result) {
        throw new Error('Result not found');
        }

        const totalPoints = result.userAnswers.reduce((sum, userAnswer) => {
            if (userAnswer.answer) {
                return sum + userAnswer.answer.point;
            }
            return sum;
        }, 0);
        
        const fashionStyle = this.handleQuizRule(totalPoints);

        return { totalPoints, fashionStyle };
    }
   


    private handleQuizRule(totalPoints: number): FashionStyle {
        if (totalPoints <= PointRange.MINIMAL) {
        return FashionStyle.MINIMAL;
        } else if (totalPoints <= PointRange.CASUAL) {
        return FashionStyle.CASUAL;
        } else if (totalPoints <= PointRange.MODERN) {
        return FashionStyle.MODERN;
        } else {
        return FashionStyle.LUXURY;
        }
    }
}
