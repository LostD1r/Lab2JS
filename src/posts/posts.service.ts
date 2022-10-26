import { Injectable } from '@nestjs/common';
import { Post } from './posts.interface';
import { CreatePostDto } from './dto/create.posts.dto';
import { UpdatePostDto } from './dto/update.posts.dto';

@Injectable()
export class PostsService {
  private posts: Post[] = [];

  findAll() {
    return this.posts;
  }

  findById(id: number) {
    const index = this.posts.findIndex((post) => post.id === id);
    if (index < 0) {
      throw new Error('Not found');
    }
    return this.posts[index];
  }

  create(post: CreatePostDto) {
    const _post: Post = {
      id: randomIntFromInterval(1, 1000),
      createdAt: new Date().toDateString(),
      ...post,
    };
    this.posts.push(_post);
    return _post;
  }

  update(id: number, post: UpdatePostDto) {
    const index = this.posts.findIndex((p) => p.id === id);
    if (index < 0) {
      return;
    }
    const _post: Post = {
      ...this.posts[index],
      ...post,
    };
    console.log(_post);
    this.posts[index] = _post;
    return _post;
  }

  delete(id: number) {
    this.posts = this.posts.filter((p) => p.id !== id);
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
