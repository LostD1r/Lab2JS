import { Injectable } from '@nestjs/common';
import { Comment } from './comments.interface';
import { CreateCommentDto } from './dto/create.comment.dto';
import { UpdateCommentDto } from './dto/update.comment.dto';

@Injectable()
export class CommentService {
  private comments: Comment[] = [];

  findAll() {
    return this.comments;
  }

  findById(id: number) {
    const index = this.comments.findIndex((comment) => comment.id === id);

    if (index < 0) throw new Error('Not found');

    return this.comments[index];
  }

  create(comment: CreateCommentDto) {
    const _comment: Comment = {
      id: randomIntFromInterval(1, 1000),
      createdAt: new Date().toDateString(),
      ...comment,
    };
    this.comments.push(_comment);
    return _comment;
  }

  update(id: number, comment: UpdateCommentDto) {
    const index = this.comments.findIndex((p) => p.id === id);

    if (index < 0) return;

    const _comment: Comment = {
      ...this.comments[index],
      ...comment,
    };

    console.log(_comment);
    this.comments[index] = _comment;
    return _comment;
  }

  delete(id: number) {
    this.comments = this.comments.filter((p) => p.id !== id);
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
