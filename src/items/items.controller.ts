import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { CreateItemDto } from './dto/createItem.dto';
import { UpdateItemDto } from './dto/updateItem.dto';
import { Item } from './entity/item.entity';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsSvc: ItemsService) {}

  @Get()
  getAllItems(): Observable<Item[]> {
    return this.itemsSvc.get();
  }

  @Get(':id')
  getItemById(@Param('id') id: number): Observable<Item> {
    return this.itemsSvc.getById(Number(id));
  }

  @Post()
  createItem(@Body() createItemDto: CreateItemDto): Observable<Item> {
    return this.itemsSvc.create(createItemDto);
  }

  @Put()
  updateItem(@Body() updateItemDto: UpdateItemDto): Observable<Item> {
    return this.itemsSvc.update(updateItemDto);
  }

  @Delete(':id')
  deleteItem(@Param('id') id: number): Observable<void> {
    return this.itemsSvc.delete(Number(id));
  }
}
