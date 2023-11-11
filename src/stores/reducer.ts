import {InitialStateInterface, FeedInterface} from './state';
import {BtsActions, ActionType} from './actions';
export function btsReducer(
  state: InitialStateInterface,
  action: BtsActions,
): InitialStateInterface {
  let feedById: FeedInterface | undefined;
  switch (action.type) {
    case ActionType.Downvote:
      feedById = findFeedById(state.feeds, action.payload.feedId);

      if (feedById) {
        feedById.downvote = feedById.downvote.includes(action.payload.userId)
          ? feedById.downvote.filter(el => el !== action.payload.userId)
          : [...feedById.downvote, action.payload.userId];
      }

      return {
        ...state,
        feeds: Array.isArray(state.feeds)
          ? state.feeds.map(feed => {
              if (feedById && feed.id === feedById.id) {
                return feedById;
              }
              return feed;
            })
          : [],
      };
    case ActionType.Upvote:
      feedById = findFeedById(state.feeds, action.payload.feedId);

      if (feedById) {
        feedById.upvote = feedById.upvote.includes(action.payload.userId)
          ? feedById.upvote.filter(el => el !== action.payload.userId)
          : [...feedById.upvote, action.payload.userId];
      }

      return {
        ...state,
        feeds: Array.isArray(state.feeds)
          ? state.feeds.map(feed => {
              if (feedById && feed.id === feedById.id) {
                return feedById;
              }
              return feed;
            })
          : [],
      };
    case ActionType.AddComment:
      feedById = findFeedById(state.feeds, action.payload.feedId);

      if (feedById) {
        feedById.comments = [...feedById.comments, action.payload];
      }

      return {
        ...state,
        feeds: Array.isArray(state.feeds)
          ? state.feeds.map(feed => {
              if (feedById && feed.id === feedById.id) {
                return feedById;
              }
              return feed;
            })
          : [],
      };

    default:
      return state;
  }
}

const findFeedById = (
  feeds: Array<FeedInterface>,
  feedId: number,
): FeedInterface | undefined => {
  return feeds.find(feed => feed.id === feedId);
};
