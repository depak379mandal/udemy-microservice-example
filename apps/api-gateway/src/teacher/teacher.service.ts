import { Inject, Injectable } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { ClientProxy } from '@nestjs/microservices';
import TeacherCommand from 'commands/teacher.cmd';

@Injectable()
export class TeacherService {
  constructor(@Inject('TEACHER_SERVICE') private teacherClient: ClientProxy) {}

  create(createTeacherDto: CreateTeacherDto) {
    return this.teacherClient.send(
      { cmd: TeacherCommand.create },
      createTeacherDto,
    );
  }

  findAll() {
    return this.teacherClient.send({ cmd: TeacherCommand.getAll }, {});
  }

  findOne(id: string) {
    return this.teacherClient.send({ cmd: TeacherCommand.getOne }, { id });
  }

  update(id: string, updateTeacherDto: UpdateTeacherDto) {
    return this.teacherClient.send(
      { cmd: TeacherCommand.update },
      { id, ...updateTeacherDto },
    );
  }

  remove(id: string) {
    return this.teacherClient.send({ cmd: TeacherCommand.delete }, { id });
  }
}
