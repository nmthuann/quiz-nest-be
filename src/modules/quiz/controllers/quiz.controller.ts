
import {
    Body,
  Controller,

//   Inject,
  Get,
  Inject,
  Param,
  Post,
  Req

} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { IQuizService } from '../services/quiz.service';
import { QuestionEntity } from '../domains/entities/question.entity';
import { createUserAnswerDto } from '../domains/dtos/create-user-answer.dto';
import { ResultEntity } from '../domains/entities/result.entity';
// import { IQuizService } from '../services/quiz.service';

@Controller('/v1/quiz')
@ApiTags('Quiz')
export class QuizController {

constructor(
    @Inject('IQuizService')
    private readonly quizService: IQuizService,
  ) { }

    // start Quiz
    @Get('/get-quiz')
    async getQuiz(): Promise<QuestionEntity[] | null> {
        return await this.quizService.getQuiz();
    }

   @Post('/submit')
    async doQuiz(@Req() req, @Body() data: createUserAnswerDto[]): Promise<ResultEntity | null>  {
        const userId = req.user ? req.user.id : null;
        return await this.quizService.doQuiz(userId, data); 
        // -> trả về id result -> click btn review sẽ lấy id này đi tính toán.
    }

    @Get('/view-result/:id')
    async viewResult(@Param('id') id: string) {
        return this.viewResult(id);
    }

}
