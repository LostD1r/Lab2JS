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
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  getById(@Param('id', new ParseIntPipe()) id: number) {
    return this.postsService.findById(id);
  }

  @Post
  create(@Body() body: any) {
    return this.postsService.create(body);
  }

  @Put(':id')
  update(@Param('id', new parseIntPipe()) id: number, @Body() body: any) {
    return this.postsService.update(id, body);
  }

  @Delete('id')
  delete(@Param('id', new ParseIntPipe()) id: number) {
    this.postsService.delete(id);
  }
}
