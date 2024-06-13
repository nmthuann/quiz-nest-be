import { Injectable } from "@nestjs/common";
import { QuestionEntity } from "../../quiz/domains/entities/question.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

export interface IQuestionRepository {
  findById(id: string): Promise<QuestionEntity | null>;
  findQuestionsAndAnswers(): Promise<QuestionEntity[] | null>;
}


@Injectable()
export class QuestionRepository implements IQuestionRepository {
    constructor(
    @InjectRepository(QuestionEntity)
    private questionRepository: Repository<QuestionEntity>,
  ) { }
 

    async findById(id: string): Promise<QuestionEntity | null> {
        return await this.questionRepository.findOneById(id);
    }

    async findQuestionsAndAnswers(): Promise<QuestionEntity[] | null> {
        return await this.questionRepository.find({ relations: ['answers'] });
    }

    
}