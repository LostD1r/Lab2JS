import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentModule } from './posts/comment.module';
import { CommentsController } from './posts/comments.controller';
import { CommentService } from './posts/comment.service';

@Module({
  imports: [CommentModule],
  controllers: [AppController, CommentsController],
  providers: [AppService, CommentService],
})
export class AppModule {}
