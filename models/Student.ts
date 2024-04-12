import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type StudentDocument = HydratedDocument<Student>;

@Schema({ timestamps: true })
export default class Student {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;
}

export const StudentSchema = SchemaFactory.createForClass(Student);
