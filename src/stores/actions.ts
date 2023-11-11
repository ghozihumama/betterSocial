import {CommentInterface} from './state';
export enum ActionType {
  Downvote,
  Upvote,
  AddComment,
}

export interface Downvote {
  type: ActionType.Downvote;
  payload: {feedId: number; userId: number};
}

export interface Upvote {
  type: ActionType.Upvote;
  payload: {feedId: number; userId: number};
}

export interface AddComment {
  type: ActionType.AddComment;
  payload: CommentInterface;
}

export type BtsActions = Downvote | Upvote | AddComment;
