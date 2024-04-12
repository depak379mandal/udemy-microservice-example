import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import Student from './Student';
import Course from './Course';

export type PurchaseDocument = HydratedDocument<Purchase>;

@Schema()
export default class Purchase {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Course' })
  course: Course;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Student' })
  purchasedBy: Student;
}

export const PurchaseSchema = SchemaFactory.createForClass(Purchase);
