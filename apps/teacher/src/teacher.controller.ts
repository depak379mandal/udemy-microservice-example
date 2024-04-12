import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { TeacherService } from './teacher.service';
import TeacherCommand from 'commands/teacher.cmd';
import { CreateTeacherDto } from 'apps/api-gateway/src/teacher/dto/create-teacher.dto';
import { UpdateTeacherDto } from 'apps/api-gateway/src/teacher/dto/update-teacher.dto';

@Controller()
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @MessagePattern({ cmd: TeacherCommand.delete })
  delete({ id }: { id: string }) {
    return this.teacherService.delete(id);
  }

  @MessagePattern({ cmd: TeacherCommand.getAll })
  getAll() {
    return this.teacherService.getAll();
  }

  @MessagePattern({ cmd: TeacherCommand.getOne })
  getOne({ id }: { id: string }) {
    return this.teacherService.getOne(id);
  }

  @MessagePattern({ cmd: TeacherCommand.create })
  create(createDto: CreateTeacherDto) {
    return this.teacherService.create(createDto);
  }

  @MessagePattern({ cmd: TeacherCommand.update })
  update(updateTeacherDto: UpdateTeacherDto) {
    return this.teacherService.update(updateTeacherDto);
  }
}
