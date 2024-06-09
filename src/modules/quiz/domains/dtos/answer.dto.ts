import { AbstractDto } from '../../../../common/dto/abstract.dto';

import {

    NumberFieldOptional,
  StringFieldOptional,
} from '../../../../decorators';

export class AnswerDto extends AbstractDto{
    @StringFieldOptional({nullable: false})
    answerContent!: string;

    @NumberFieldOptional({nullable: false})
    point!: number;
} 