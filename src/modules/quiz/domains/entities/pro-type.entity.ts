import { Column, Entity, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../../../common/abstract.entity';
import { ProFigureEntity } from './pro-figure.entity';
import { ProImprovementEntity } from './pro-improvement.entity';
import { ProStrengthEntity } from './pro-strength.entity';
import { ProTypeValueEntity } from './pro-type-value.entity';
import { QuizEntity } from './quiz.entity';

@Entity({ name: 'pro_types' })
export class ProTypeEntity extends AbstractEntity {
  @Column({ nullable: false, type: 'varchar' })
  name!: string | null;

  @Column({ nullable: false, type: 'varchar' })
  description!: string | null;

  @Column({ nullable: false, type: 'varchar' })
  img_type!: string | null;

  @Column({ nullable: false, type: 'varchar' })
  img_strength!: string | null;

  @OneToMany(() => ProStrengthEntity, (pro_strength) => pro_strength.pro_type)
  pro_strengths!: ProStrengthEntity[];

  @OneToMany(() => ProTypeValueEntity, (pro_type_value) => pro_type_value.pro_type)
  pro_type_values!: ProTypeValueEntity[];

  @OneToMany(() => QuizEntity, (quiz) => quiz.pro_type)
  quizzes!: QuizEntity[];

  @OneToMany(() => ProFigureEntity, (pro_figure) => pro_figure.pro_type)
  pro_figures!: ProFigureEntity[];

  @OneToMany(() => ProImprovementEntity, (pro_improvement) => pro_improvement.pro_type)
  pro_improvements!: ProImprovementEntity[];
}
