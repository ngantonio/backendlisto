/* eslint-disable @typescript-eslint/no-unused-vars */
import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import mongoose from 'mongoose';

@ObjectType()
@Schema()
export class Company {
  @Field(() => String, { nullable: true })
  _id: mongoose.Schema.Types.ObjectId;

  @Field()
  @Prop({ required: true })
  name: string;

  @Field()
  @Prop({ required: true })
  description: string;

  @Field()
  @Prop({ required: true })
  address: string;

  @Field({ nullable: true })
  @Prop()
  officialName?: string;

  @Field({ nullable: true })
  @Prop()
  CEO?: string;

  @Field({ nullable: true })
  @Prop()
  foundedDate?: string;

  @Field((type) => [String], { nullable: true })
  @Prop()
  founders?: Array<string>;

  @Field((type) => Int, { nullable: true })
  @Prop()
  employees?: number;

  @Field({ nullable: true })
  @Prop()
  website?: string;

  @Field((type) => [String], { nullable: true })
  @Prop()
  products?: Array<string>;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
