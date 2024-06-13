import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTables1718202097691 implements MigrationInterface {
    name = 'CreateTables1718202097691'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "options" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "answer" character varying NOT NULL, "is_correct" boolean NOT NULL, "question_id" uuid, CONSTRAINT "PK_d232045bdb5c14d932fba18d957" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "questions" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "question" character varying NOT NULL, "question_type" character varying(50) NOT NULL, "pro_strength_id" uuid NOT NULL, CONSTRAINT "REL_3463e8ad59e0341706231f1a3d" UNIQUE ("pro_strength_id"), CONSTRAINT "PK_08a6d4b0f49ff300bf3a0ca60ac" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pro_stregths" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "pro_type_id" uuid, CONSTRAINT "PK_faa49bbedaa9661f5a1761b6b3c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pro_values" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, CONSTRAINT "PK_759b149d064b88e93533b116677" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pro_type_values" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "pro_type_id" uuid, "value_id" uuid, CONSTRAINT "PK_3b2e4fa03a356360b7300b3d08c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pro_improvements" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "description" character varying NOT NULL, "pro_type_id" uuid, CONSTRAINT "PK_6e185282f5bd302e260b8299f7c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pro_figures" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "career" character varying NOT NULL, "pro_type_id" uuid, CONSTRAINT "PK_1a2fcb938f03c730904c3dbd5d0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pro_types" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying NOT NULL, "img_type" character varying NOT NULL, "img_strength" character varying NOT NULL, CONSTRAINT "PK_15de4c7b43103ffde6da457ba02" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "quizzes" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "result_image" character varying NOT NULL, "user_id" uuid, "pro_type_id" uuid, CONSTRAINT "PK_b24f0f7662cf6b3a0e7dba0a1b4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "achievements" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "organization" character varying NOT NULL, "award_date" date NOT NULL, CONSTRAINT "PK_1bc19c37c6249f70186f318d71d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "activities" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "role" character varying NOT NULL, "time_period" character varying NOT NULL, "description" character varying NOT NULL, "user_id" uuid, CONSTRAINT "PK_7f4004429f731ffb9c88eb486a8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "certifications" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "organization" character varying NOT NULL, "completion_date" character varying NOT NULL, "user_id" uuid, CONSTRAINT "PK_fd763d412e4a1fb1b6dadd6e72b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "experiences" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "company" character varying NOT NULL, "position" character varying NOT NULL, "time_period" character varying NOT NULL, "description" character varying NOT NULL, "user_id" uuid, CONSTRAINT "PK_884f0913a63882712ea578e7c85" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "interests" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "description" character varying NOT NULL, "user_id" uuid, CONSTRAINT "PK_a2dc7b6f9a8bcf9e3f9312a879d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "languages" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "name" character varying NOT NULL, "proficiency_level" character varying NOT NULL, "user_id" uuid, CONSTRAINT "PK_b517f827ca496b29f4d549c631d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "fullname" character varying NOT NULL, "role" "public"."users_role_enum" NOT NULL DEFAULT 'USER', "email" character varying, "phone" character varying, "password" character varying, "avatar" character varying, "cover_picture" character varying, "date_of_birth" date, "gender" character varying, "location" character varying, "school" character varying, "major" character varying, "social_link" character varying, "gpa" double precision, CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "options" ADD CONSTRAINT "FK_2bdd03245b8cb040130fe16f21d" FOREIGN KEY ("question_id") REFERENCES "questions"("id") ON DELETE NO ACTION ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "questions" ADD CONSTRAINT "FK_3463e8ad59e0341706231f1a3d6" FOREIGN KEY ("pro_strength_id") REFERENCES "pro_stregths"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pro_stregths" ADD CONSTRAINT "FK_cd1d0fbe701341597e6f3ecbb2d" FOREIGN KEY ("pro_type_id") REFERENCES "pro_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pro_type_values" ADD CONSTRAINT "FK_8e5c938c856c9a5fdca39e6a5f3" FOREIGN KEY ("pro_type_id") REFERENCES "pro_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pro_type_values" ADD CONSTRAINT "FK_5852e22582d227af654425ae084" FOREIGN KEY ("value_id") REFERENCES "pro_values"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pro_improvements" ADD CONSTRAINT "FK_17fd0e0fd622777bc05442cfacc" FOREIGN KEY ("pro_type_id") REFERENCES "pro_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pro_figures" ADD CONSTRAINT "FK_7c8aefd831ae90ceed48b566333" FOREIGN KEY ("pro_type_id") REFERENCES "pro_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "quizzes" ADD CONSTRAINT "FK_bd065910c0f4250052c844730dc" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "quizzes" ADD CONSTRAINT "FK_b1291bcff946f29dd71f6b97d14" FOREIGN KEY ("pro_type_id") REFERENCES "pro_types"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "activities" ADD CONSTRAINT "FK_b82f1d8368dd5305ae7e7e664c2" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "certifications" ADD CONSTRAINT "FK_30c546fff74435987cb4cf905bf" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "experiences" ADD CONSTRAINT "FK_99646b65b428fe670f2dc5aac77" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "interests" ADD CONSTRAINT "FK_1113291b6138a4698c780d41bad" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "languages" ADD CONSTRAINT "FK_5a27338bef532c5a30be70a7223" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "languages" DROP CONSTRAINT "FK_5a27338bef532c5a30be70a7223"`);
        await queryRunner.query(`ALTER TABLE "interests" DROP CONSTRAINT "FK_1113291b6138a4698c780d41bad"`);
        await queryRunner.query(`ALTER TABLE "experiences" DROP CONSTRAINT "FK_99646b65b428fe670f2dc5aac77"`);
        await queryRunner.query(`ALTER TABLE "certifications" DROP CONSTRAINT "FK_30c546fff74435987cb4cf905bf"`);
        await queryRunner.query(`ALTER TABLE "activities" DROP CONSTRAINT "FK_b82f1d8368dd5305ae7e7e664c2"`);
        await queryRunner.query(`ALTER TABLE "quizzes" DROP CONSTRAINT "FK_b1291bcff946f29dd71f6b97d14"`);
        await queryRunner.query(`ALTER TABLE "quizzes" DROP CONSTRAINT "FK_bd065910c0f4250052c844730dc"`);
        await queryRunner.query(`ALTER TABLE "pro_figures" DROP CONSTRAINT "FK_7c8aefd831ae90ceed48b566333"`);
        await queryRunner.query(`ALTER TABLE "pro_improvements" DROP CONSTRAINT "FK_17fd0e0fd622777bc05442cfacc"`);
        await queryRunner.query(`ALTER TABLE "pro_type_values" DROP CONSTRAINT "FK_5852e22582d227af654425ae084"`);
        await queryRunner.query(`ALTER TABLE "pro_type_values" DROP CONSTRAINT "FK_8e5c938c856c9a5fdca39e6a5f3"`);
        await queryRunner.query(`ALTER TABLE "pro_stregths" DROP CONSTRAINT "FK_cd1d0fbe701341597e6f3ecbb2d"`);
        await queryRunner.query(`ALTER TABLE "questions" DROP CONSTRAINT "FK_3463e8ad59e0341706231f1a3d6"`);
        await queryRunner.query(`ALTER TABLE "options" DROP CONSTRAINT "FK_2bdd03245b8cb040130fe16f21d"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "languages"`);
        await queryRunner.query(`DROP TABLE "interests"`);
        await queryRunner.query(`DROP TABLE "experiences"`);
        await queryRunner.query(`DROP TABLE "certifications"`);
        await queryRunner.query(`DROP TABLE "activities"`);
        await queryRunner.query(`DROP TABLE "achievements"`);
        await queryRunner.query(`DROP TABLE "quizzes"`);
        await queryRunner.query(`DROP TABLE "pro_types"`);
        await queryRunner.query(`DROP TABLE "pro_figures"`);
        await queryRunner.query(`DROP TABLE "pro_improvements"`);
        await queryRunner.query(`DROP TABLE "pro_type_values"`);
        await queryRunner.query(`DROP TABLE "pro_values"`);
        await queryRunner.query(`DROP TABLE "pro_stregths"`);
        await queryRunner.query(`DROP TABLE "questions"`);
        await queryRunner.query(`DROP TABLE "options"`);
    }

}
