import { Column, Entity, OneToMany } from "typeorm";
import { AnswerEntity } from "./answer.entity";
import { UserAnswerEntity } from "./user-answer.entity";
import { AbstractEntity } from '../../../../common/abstract.entity';
// import { QuestionDto } from "../dtos/question.dto";
// import { UseDto } from '../../../../decorators';
@Entity({name: 'questions'})
// @UseDto(QuestionDto)
export class QuestionEntity extends AbstractEntity {

    @Column({nullable: false})
    questionContent!: string;

    @OneToMany(() => AnswerEntity, answer => answer.question)
    answers!: AnswerEntity[];

    
    @OneToMany(() => UserAnswerEntity, userAnswer => userAnswer.question)
    userAnswers!: UserAnswerEntity[];
}