import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { AbstractEntity } from '../../../../common/abstract.entity';
import { QuestionEntity } from './question.entity';

@Entity({ name: 'options' })
export class OptionEntity extends AbstractEntity {
  @ManyToOne(() => QuestionEntity, { onUpdate: 'CASCADE' })
  @JoinColumn({ name: 'question_id' })
  question!: QuestionEntity;

  @Column({ nullable: false, type: 'varchar' })
  answer!: string;

  @Column({ nullable: false })
  is_correct!: boolean;
}
