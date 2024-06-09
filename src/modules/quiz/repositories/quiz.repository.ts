// import { Injectable } from "@nestjs/common";
// import { QuizEntity } from "../domains/entities/quiz.entity";
// import { InjectRepository } from "@nestjs/typeorm";
// import { Repository } from "typeorm";

// export interface IQuizRepository {
//   findById(id: string): Promise<QuizEntity | null>
// }

// @Injectable()
// export class QuizRepository implements IQuizRepository {
//     constructor(
//     @InjectRepository(QuizEntity)
//     private quizRepository: Repository<QuizEntity>,
//   ) { }


//     findById(id: string): Promise<QuizEntity | null> {
//          return this.quizRepository.findOne({
//       where: {
//         id,
//       },
//     });
//     }

// }