import {
  HttpException,
  HttpStatus,
  Injectable,
  NotImplementedException,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { CreateItemDto } from './dto/createItem.dto';
import { UpdateItemDto } from './dto/updateItem.dto';
import { Item } from './entity/item.entity';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  get(): Observable<Item[]> {
    return of(this.items);
  }

  getById(id: number): Observable<Item> {
    const item = this.items.find((item) => item.id === id);

    if (item) {
      return of(item);
    }

    throw new HttpException('Item not found', HttpStatus.NOT_FOUND);
  }

  create(createItemDto: CreateItemDto): Observable<Item> {
    throw new NotImplementedException();

    // throw new HttpException('Item not found', HttpStatus.BAD_REQUEST);
  }

  update(updateItemDto: UpdateItemDto): Observable<Item> {
    throw new NotImplementedException();
  }

  delete(id: number): Observable<void> {
    throw new NotImplementedException();
  }
}
