import { Module } from '@nestjs/common';
import { CourseModule } from './course/course.module';
import { TeacherModule } from './teacher/teacher.module';
import { StudentModule } from './student/student.module';
import { PurchaseModule } from './purchase/purchase.module';

@Module({
  imports: [CourseModule, TeacherModule, StudentModule, PurchaseModule],
})
export class ApiGatewayModule {}
