import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';

import { AbstractEntity } from '../../../../common/abstract.entity';
import { ProTypeEntity } from './pro-type.entity';

@Entity({ name: 'pro_figures' })
export class ProFigureEntity extends AbstractEntity {
  @Column({ type: 'varchar', nullable: false })
  name!: string | null;

  @Column({ type: 'varchar', nullable: false })
  career!: string | null;

  @ManyToOne(() => ProTypeEntity, (pro_type) => pro_type.pro_figures)
  @JoinColumn({ name: 'pro_type_id' })
  pro_type!: ProTypeEntity | null;
}
