import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { OptionEntity } from "../domains/entities/option.entity";

export interface IAnswerRepository {
  findById(id: string): Promise<OptionEntity | null>;
}


@Injectable()
export class AnswerRepository implements IAnswerRepository {
    constructor(
    @InjectRepository(OptionEntity)
    private answerRepository: Repository<OptionEntity>,
  ) { }
 

    async findById(id: string): Promise<OptionEntity | null> {
        return await this.answerRepository.findOneById(id);
    }    
}