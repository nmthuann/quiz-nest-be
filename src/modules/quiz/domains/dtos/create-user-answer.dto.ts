import { StringFieldOptional } from '../../../../decorators';

export class createUserAnswerDto{
    
    @StringFieldOptional({ nullable: false})
    questionId!: string;

    @StringFieldOptional({ nullable: false})
    answerId!: string;
}