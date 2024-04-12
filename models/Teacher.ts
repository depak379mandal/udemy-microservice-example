import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type TeacherDocument = HydratedDocument<Teacher>;

@Schema()
export default class Teacher {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop()
  email: string;
}

export const TeacherSchema = SchemaFactory.createForClass(Teacher);
