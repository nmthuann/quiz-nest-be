import { Column, Entity, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../../../common/abstract.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'achievements' })
export class AchievementEntity extends AbstractEntity {
  @Column({ type: 'varchar' })
  name!: string;

  @Column({ type: 'varchar' })
  organization!: string;

  @Column({ type: 'date' })
  award_date!: Date;

  @OneToMany(() => UserEntity, (user) => user.achievements)
  user!: UserEntity;
}
