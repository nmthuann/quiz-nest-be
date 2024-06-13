import { Entity, JoinColumn, ManyToOne } from 'typeorm';

import { AbstractEntity } from '../../../../common/abstract.entity';
import { ProTypeEntity } from './pro-type.entity';
import { ProValueEntity } from './pro-value.entity';

@Entity({ name: 'pro_type_values' })
export class ProTypeValueEntity extends AbstractEntity {
  @ManyToOne(() => ProTypeEntity, (pro_type) => pro_type.pro_type_values)
  @JoinColumn({ name: 'pro_type_id' })
  pro_type!: ProTypeEntity;

  @ManyToOne(() => ProValueEntity, (pro_value) => pro_value.pro_type_values)
  @JoinColumn({ name: 'value_id' })
  pro_value!: ProValueEntity;
}
