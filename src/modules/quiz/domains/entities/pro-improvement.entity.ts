import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { AbstractEntity } from '../../../../common/abstract.entity';
import { ProTypeEntity } from './pro-type.entity';

@Entity({ name: 'pro_improvements' })
export class ProImprovementEntity extends AbstractEntity {
  @Column({ nullable: false, type: 'varchar' })
  description!: string | null;

  @ManyToOne(() => ProTypeEntity, (pro_type) => pro_type.pro_improvements)
  @JoinColumn({ name: 'pro_type_id' })
  pro_type!: ProTypeEntity | null;
}
