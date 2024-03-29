/* eslint-disable @typescript-eslint/no-unused-vars */
import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsNotEmpty,
  IsNumber,
  IsArray,
  IsDate,
  IsOptional,
  IsString,
} from 'class-validator';

@InputType()
export class UpdateCompanyDTO {
  @IsNotEmpty({
    message: 'Company name  cannot be empty',
  })
  @IsString()
  @Field({ nullable: true })
  @IsOptional()
  name?: string;

  @IsNotEmpty({
    message: 'Company description cannot be empty',
  })
  @IsOptional()
  @Field({ nullable: true })
  @IsString()
  description?: string;

  @IsNotEmpty({
    message: 'Company address cannot be empty',
  })
  @IsOptional()
  @Field({ nullable: true })
  address?: string;

  @Field({ nullable: true })
  @IsOptional()
  officialName?: string;

  @Field({ nullable: true })
  @IsOptional()
  CEO?: string;

  @Field({ nullable: true })
  @IsOptional()
  foundedDate?: string;

  //@IsArray()
  @Field((type) => [String], { nullable: true })
  @IsOptional()
  founders?: Array<string>;

  @Field((type) => Int, { nullable: true })
  @IsOptional()
  employees?: number;

  @Field({ nullable: true })
  @IsOptional()
  website?: string;

  @Field((type) => [String], { nullable: true })
  @IsOptional()
  products?: Array<string>;
}
