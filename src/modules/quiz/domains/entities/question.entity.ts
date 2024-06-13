import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';

import { AbstractEntity } from '../../../../common/abstract.entity';
import { OptionEntity } from './option.entity';
import { ProStrengthEntity } from './pro-strength.entity';

@Entity({ name: 'questions' })
export class QuestionEntity extends AbstractEntity {
  @Column({ nullable: false, type: 'varchar' })
  question!: string | null;

  // để phân biệt professional vs navigator
  @Column({ nullable: false, length: 50, type: 'varchar' })
  question_type!: string | null;

  @OneToMany(() => OptionEntity, (option) => option.question, {
    cascade: true,
    eager: true,
  })
  options!: OptionEntity[] | null;

  @OneToOne(() => ProStrengthEntity, (pro_strength) => pro_strength.question, {
    nullable: false,
    cascade: true,
    eager: true,
  })
  @JoinColumn({ name: 'pro_strength_id' })
  pro_strength!: ProStrengthEntity | null;
}
