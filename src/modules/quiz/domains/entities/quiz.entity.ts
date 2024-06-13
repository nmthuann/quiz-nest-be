import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { AbstractEntity } from '../../../../common/abstract.entity';
import { UserEntity } from '../../../user/domains/entities/user.entity';
import { ProTypeEntity } from './pro-type.entity';

@Entity({ name: 'quizzes' })
export class QuizEntity extends AbstractEntity {
  @ManyToOne(() => UserEntity, (user) => user.quizzes)
  @JoinColumn({ name: 'user_id' })
  user!: UserEntity;

  @ManyToOne(() => ProTypeEntity, (pro_type) => pro_type.quizzes)
  @JoinColumn({ name: 'pro_type_id' })
  pro_type!: ProTypeEntity | null;

  @Column({ nullable: false, type: 'varchar' })
  result_image!: string | null;
}
