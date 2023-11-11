import {InitialStateInterface, FeedInterface} from './state';
import {BtsActions, ActionType} from './actions';
export function btsReducer(
  state: InitialStateInterface,
  action: BtsActions,
): InitialStateInterface {
  const feedById: FeedInterface | undefined = state.feeds.find(
    feed => feed.id === action.payload.feedId,
  );

  if (feedById) {
    switch (action.type) {
      case ActionType.Downvote:
        feedById.downvote = feedById.downvote.includes(action.payload.userId)
          ? feedById.downvote.filter(el => el !== action.payload.userId)
          : [...feedById.downvote, action.payload.userId];

        return {
          ...state,
          feeds: Array.isArray(state.feeds)
            ? state.feeds.map(feed => {
                if (feed.id === action.payload.feedId) {
                  return feedById;
                }
                return feed;
              })
            : [],
        };
      case ActionType.Upvote:
        feedById.upvote = feedById.upvote.includes(action.payload.userId)
          ? feedById.upvote.filter(el => el !== action.payload.userId)
          : [...feedById.upvote, action.payload.userId];

        return {
          ...state,
          feeds: Array.isArray(state.feeds)
            ? state.feeds.map(feed => {
                if (feed.id === action.payload.feedId) {
                  return feedById;
                }
                return feed;
              })
            : [],
        };
      case ActionType.AddComment:
        feedById.comments = [...feedById.comments, action.payload];

        return {
          ...state,
          feeds: Array.isArray(state.feeds)
            ? state.feeds.map(feed => {
                if (feed.id === action.payload.feedId) {
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

  return state;
}
