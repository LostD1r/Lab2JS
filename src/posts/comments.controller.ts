import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('posts')
export class CommentsController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  findAll() {
    return this.commentService.findAll();
  }

  @Get(':id')
  getById(@Param('id', new ParseIntPipe()) id: number) {
    return this.commentService.findById(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.commentService.create(body);
  }

  @Put(':id')
  update(@Param('id', new ParseIntPipe()) id: number, @Body() body: any) {
    return this.commentService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', new ParseIntPipe()) id: number) {
    this.commentService.delete(id);
  }
}
