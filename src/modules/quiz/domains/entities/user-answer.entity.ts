import { Entity, JoinColumn, ManyToOne } from "typeorm";
import { QuestionEntity } from "./question.entity";
import { AnswerEntity } from "./answer.entity";
import { ResultEntity } from "./result.entity";
import { AbstractEntity } from '../../../../common/abstract.entity';

@Entity({ name: 'user_answers' })
export class UserAnswerEntity extends AbstractEntity {

    @ManyToOne(() => ResultEntity, (result) => result.id)
    @JoinColumn({ name: 'result_id' })
    result!: ResultEntity | null;

    @ManyToOne(() => QuestionEntity, (question) => question.id)
    @JoinColumn({ name: 'question_id' })
    question!: QuestionEntity | null;

    @ManyToOne(() => AnswerEntity, (answer) => answer.id)
    @JoinColumn({ name: 'answer_id' })
    answer!: AnswerEntity | null;
}

    // @PrimaryColumn()
    // quizId!: string;

    // @PrimaryColumn()
    // questionId!: string;

    // @PrimaryColumn()
    // anwserId!: string;

    // @ManyToOne(() => QuizEntity, (quiz) => quiz.id)
    // @JoinColumn({ name: 'quiz_id' })
    // quiz!: QuizEntity;