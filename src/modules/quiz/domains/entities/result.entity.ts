import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { AbstractEntity } from '../../../../common/abstract.entity';
import { UserParticipantEntity } from "./user-participant.entity";
import { UserAnswerEntity } from "./user-answer.entity";

@Entity({ name: 'results' })
export class ResultEntity extends AbstractEntity {

    @ManyToOne(() => UserParticipantEntity)
    @JoinColumn({ name: 'user_id' })
    user?: UserParticipantEntity | null;
    
    @Column({ type: 'timestamp', nullable: true })
    completeTime?: Date | null;

    @Column()
    totalPoint!: number | 0;

    @OneToMany(() => UserAnswerEntity, userAnswer => userAnswer.result)
    userAnswers!: UserAnswerEntity[];
}