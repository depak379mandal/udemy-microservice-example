import { ApiProperty } from '@nestjs/swagger';
import { IsMongoId } from 'class-validator';

export class CreatePurchaseDto {
  @ApiProperty()
  @IsMongoId()
  course: string;

  @ApiProperty()
  @IsMongoId()
  purchasedBy: string;
}
