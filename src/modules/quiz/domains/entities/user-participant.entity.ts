

import { Entity, Column, OneToMany, } from 'typeorm';
// import { UserParticipantDto } from '../dtos/user-participant.dto';
import { AbstractEntity } from '../../../../common/abstract.entity';
// import { UseDto } from '../../../../decorators';
import { ResultEntity } from './result.entity';

@Entity({name: 'user_participants'})
// @UseDto(UserParticipantDto)
export class UserParticipantEntity extends AbstractEntity {

  @Column({unique: true})
  userName!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName?: string;

  @OneToMany(() => ResultEntity, result => result.user)
  results!: ResultEntity[];
}