import { Column, Entity, OneToMany } from 'typeorm';

import { AbstractEntity } from '../../../../common/abstract.entity';
import { ProTypeValueEntity } from './pro-type-value.entity';

@Entity('pro_values')
export class ProValueEntity extends AbstractEntity {
  @Column({ type: 'varchar', nullable: false })
  name!: string | null;

  @OneToMany(
    () => ProTypeValueEntity,
    (pro_type_value) => pro_type_value.pro_value,
  )
  pro_type_values!: ProTypeValueEntity[];
}
