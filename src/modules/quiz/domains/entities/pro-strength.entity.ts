import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

import { AbstractEntity } from '../../../../common/abstract.entity';
import { ProTypeEntity } from './pro-type.entity';
import { QuestionEntity } from './question.entity';

@Entity({ name: 'pro_stregths' })
export class ProStrengthEntity extends AbstractEntity {
  @Column({ nullable: false, type: 'varchar' })
  name!: string | null;

  @OneToOne(() => QuestionEntity, (question) => question.pro_strength) // { cascade: true }
  question!: QuestionEntity | null;

  @ManyToOne(() => ProTypeEntity, (pro_type) => pro_type.pro_strengths)
  @JoinColumn({ name: 'pro_type_id' })
  pro_type!: ProTypeEntity;
}
