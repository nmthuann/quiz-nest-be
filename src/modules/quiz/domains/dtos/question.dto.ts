import {

  StringFieldOptional,
} from '../../../../decorators';
import { AbstractDto } from '../../../../common/dto/abstract.dto';

export class QuestionDto extends AbstractDto {
    @StringFieldOptional({nullable: false})
    question!: string;
}