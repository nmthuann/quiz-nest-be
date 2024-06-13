
import {
  Controller,
//   Get,
//   Inject,
//   Query,

} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
// import { PageDto } from '../../../common/dto/page.dto';
// import { IQuizService } from '../services/quiz.service';
// import { GetQuestion } from '../domains/dtos/get-question';


@Controller('/v1/quiz')
@ApiTags('Quiz')
export class QuizController {

constructor(
    // @Inject('IQuizService')
    // private readonly quizService: IQuizService,
  ) { }

    // @Get('questions')
    // async getQuestions(
    //     @Query('type') type: string,
    //     @Query('size') size: number = 8,
    //     @Query('page') page: number = 1
    // ): Promise<PageDto<GetQuestion[]>> {
    //     return await this.quizService.getQuestions(type, size, page);
    // }

}
