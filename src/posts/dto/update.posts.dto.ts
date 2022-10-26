export class UpdateCommentDto {
  constructor(
    readonly title: string,
    readonly description: string,
    readonly createdAt: string,
  ) {}
}
