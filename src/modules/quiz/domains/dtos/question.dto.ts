import {

  StringFieldOptional,
} from '../../../../decorators';
import { AbstractDto } from '../../../../common/dto/abstract.dto';

export class QuestionDto extends AbstractDto {
    @StringFieldOptional({nullable: false})
    questionContent!: string;

  //   @ApiProperty({ type: () => QuizDetailDto, isArray: true })
  // @ValidateNested({ each: true })
  // @Type(() => QuizDetailDto)
  // quiz_details: QuizDetailDto[];
}