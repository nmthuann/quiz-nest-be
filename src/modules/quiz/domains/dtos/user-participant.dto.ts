import { AbstractDto } from '../../../../common/dto/abstract.dto';

import {
  StringFieldOptional,
} from '../../../../decorators';


export class UserParticipantDto extends AbstractDto {
  @StringFieldOptional({ nullable: true })
  firstName?: string | null;

  @StringFieldOptional({ nullable: true })
  lastName?: string | null;

  @StringFieldOptional({ nullable: true })
  username!: string;
}