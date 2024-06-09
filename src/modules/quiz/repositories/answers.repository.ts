import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { AnswerEntity } from "../domains/entities/answer.entity";

export interface IAnswerRepository {
  findById(id: string): Promise<AnswerEntity | null>;
}


@Injectable()
export class AnswerRepository implements IAnswerRepository {
    constructor(
    @InjectRepository(AnswerEntity)
    private answerRepository: Repository<AnswerEntity>,
  ) { }
 

    async findById(id: string): Promise<AnswerEntity | null> {
        return await this.answerRepository.findOne({
            where: {
                id,
            },
        });
    }

    
}