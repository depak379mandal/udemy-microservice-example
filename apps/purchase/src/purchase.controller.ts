import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { PurchaseService } from './purchase.service';
import PurchaseCommand from 'commands/purchase.cmd';
import { CreatePurchaseDto } from 'apps/api-gateway/src/purchase/dto/create-purchase.dto';
import { UpdatePurchaseDto } from 'apps/api-gateway/src/purchase/dto/update-purchase.dto';

@Controller()
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @MessagePattern({ cmd: PurchaseCommand.delete })
  delete({ id }: { id: string }) {
    return this.purchaseService.delete(id);
  }

  @MessagePattern({ cmd: PurchaseCommand.getAll })
  getAll() {
    return this.purchaseService.getAll();
  }

  @MessagePattern({ cmd: PurchaseCommand.getOne })
  getOne({ id }: { id: string }) {
    return this.purchaseService.getOne(id);
  }

  @MessagePattern({ cmd: PurchaseCommand.create })
  create(createDto: CreatePurchaseDto) {
    return this.purchaseService.create(createDto);
  }

  @MessagePattern({ cmd: PurchaseCommand.update })
  update(updatePurchaseDto: UpdatePurchaseDto) {
    return this.purchaseService.update(updatePurchaseDto);
  }
}
