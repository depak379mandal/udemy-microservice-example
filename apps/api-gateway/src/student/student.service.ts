import { Inject, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ClientProxy } from '@nestjs/microservices';
import StudentCommand from 'commands/student.cmd';

@Injectable()
export class StudentService {
  constructor(
    @Inject('STUDENT_SERVICE')
    private studentClient: ClientProxy,
  ) {}

  create(createStudentDto: CreateStudentDto) {
    return this.studentClient.send(
      { cmd: StudentCommand.create },
      createStudentDto,
    );
  }

  findAll() {
    return this.studentClient.send({ cmd: StudentCommand.getAll }, {});
  }

  findOne(id: string) {
    return this.studentClient.send({ cmd: StudentCommand.getOne }, { id });
  }

  update(id: string, updateStudentDto: UpdateStudentDto) {
    return this.studentClient.send(
      { cmd: StudentCommand.update },
      { id, ...updateStudentDto },
    );
  }

  remove(id: string) {
    return this.studentClient.send({ cmd: StudentCommand.delete }, { id });
  }
}
