// import { Injectable } from "@nestjs/common";
// import { InjectRepository } from "@nestjs/typeorm";
// import { UserAnswerEntity } from "../domains/entities/user-answer.entity";
// import { Repository } from "typeorm";
// import { createUserAnswerDro } from "../domains/dtos/create-user-answer.dto";

// @Injectable()
// export class UserAnswerRepository  {
//     constructor(
//     @InjectRepository(UserAnswerEntity)
//     private userAnswerRepository: Repository<UserAnswerEntity>,
//   ) { }

//   async createOne(data: createUserAnswerDro): Promise<UserAnswerEntity | null> {
//     const newUserAnswerEntity = new UserAnswerEntity();
//     newUserAnswerEntity.

//   }
// }