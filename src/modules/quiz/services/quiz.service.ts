import { Injectable,  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuestionEntity } from '../../quiz/domains/entities/question.entity';
import { OptionEntity } from '../domains/entities/option.entity';
import { ProTypeEntity } from '../domains/entities/pro-type.entity';


export interface IQuizService {
    // getQuestions(type: string, size: number, page: number):Promise<QuestionEntity[] | null>;
}


/**
 * create Quiz:
 * create quiz -> lấy id
 * create Quiz Detail -> ghi id get ở trên vào
 */

@Injectable()
export class QuizService implements IQuizService{

    constructor(
        @InjectRepository(QuestionEntity)
        public readonly questionRepository: Repository<QuestionEntity>,
        @InjectRepository(OptionEntity)
        public readonly optionRepository: Repository<OptionEntity>,
         @InjectRepository(ProTypeEntity)
        public readonly proTypeEntity: Repository<ProTypeEntity>,
    ) {
    }
    // getQuestions(type: string, size: number, page: number): Promise<QuestionEntity[] | null> {
    //     throw new Error('Method not implemented.');
    // }

    // async getQuestions(type: string, size: number, page: number):Promise<QuestionEntity[] | null> {


    //     const findQuestionByType = await this.proTypeEntity.findBy({
    //         where: {question_type: type}
    //     });



    // }

    
}
