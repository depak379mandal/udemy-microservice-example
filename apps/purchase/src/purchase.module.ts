import { Module } from '@nestjs/common';
import { PurchaseController } from './purchase.controller';
import { PurchaseService } from './purchase.service';
import { MongooseModule } from '@nestjs/mongoose';
import Purchase, { PurchaseSchema } from 'models/Purchase';
import Course, { CourseSchema } from 'models/Course';
import Student, { StudentSchema } from 'models/Student';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/udemy'),
    MongooseModule.forFeature([
      {
        name: Purchase.name,
        schema: PurchaseSchema,
      },
      {
        name: Course.name,
        schema: CourseSchema,
      },
      {
        name: Student.name,
        schema: StudentSchema,
      },
    ]),
  ],
  controllers: [PurchaseController],
  providers: [PurchaseService],
})
export class PurchaseModule {}
