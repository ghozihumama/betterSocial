import {feeds} from '../datas';

export interface UserInterface {
  id: number;
  name: string;
  imageProfileUrl: string;
}

export interface CommentInterface extends UserInterface {
  comment: string;
  feedId: number;
}

export interface FeedInterface {
  id: number;
  imageProfileUrl: string;
  name: string;
  createdAt: string;
  description: string;
  imageUrl: string;
  comments: Array<CommentInterface>;
  downvote: Array<number>; //id of user
  upvote: Array<number>; //id of user
}

export interface InitialStateInterface {
  user: UserInterface;
  feeds: Array<FeedInterface>;
}

export const initialState: InitialStateInterface = {
  user: {
    id: 5,
    name: 'Maulana Ghozi',
    imageProfileUrl: 'https://picsum.photos/200',
  },
  feeds: feeds,
};
