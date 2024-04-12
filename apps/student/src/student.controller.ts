import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { StudentService } from './student.service';
import StudentCommand from 'commands/Student.cmd';
import { CreateStudentDto } from 'apps/api-gateway/src/student/dto/create-student.dto';
import { UpdateStudentDto } from 'apps/api-gateway/src/student/dto/update-student.dto';

@Controller()
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @MessagePattern({ cmd: StudentCommand.delete })
  delete({ id }: { id: string }) {
    return this.studentService.delete(id);
  }

  @MessagePattern({ cmd: StudentCommand.getAll })
  getAll() {
    return this.studentService.getAll();
  }

  @MessagePattern({ cmd: StudentCommand.getOne })
  getOne({ id }: { id: string }) {
    return this.studentService.getOne(id);
  }

  @MessagePattern({ cmd: StudentCommand.create })
  create(createDto: CreateStudentDto) {
    return this.studentService.create(createDto);
  }

  @MessagePattern({ cmd: StudentCommand.update })
  update(updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(updateStudentDto);
  }
}
