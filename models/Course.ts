import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import Teacher from './Teacher';

export type CourseDocument = HydratedDocument<Course>;

@Schema({ timestamps: true })
export default class Course {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' })
  createdBy: Teacher;
}

export const CourseSchema = SchemaFactory.createForClass(Course);
