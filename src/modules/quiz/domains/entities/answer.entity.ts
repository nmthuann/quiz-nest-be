

import { Entity,  Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { QuestionEntity } from './question.entity';
import { AbstractEntity } from '../../../../common/abstract.entity';
// import { UseDto } from '../../../../decorators';
// import { AnswerDto } from '../dtos/answer.dto';
import { UserAnswerEntity } from './user-answer.entity';

@Entity({name: 'answers'})
// @UseDto(AnswerDto)
export class AnswerEntity extends AbstractEntity{

    @ManyToOne(() => QuestionEntity, { onUpdate: 'CASCADE' }) 
    @JoinColumn({ name: 'question_id' })
    question!: QuestionEntity;

    @Column()
    answerContent!: string;

    @Column()
    point!: number;

    @OneToMany(() => UserAnswerEntity, userAnswer => userAnswer.answer)
    userAnswers!: UserAnswerEntity[];
}
