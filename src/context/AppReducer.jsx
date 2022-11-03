export const AppReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_WATCHLIST":
      return {
        ...state,
        watchList: [...state.watchList, action.payload],
      };

    case "REMOVE_FROM_WATCHLIST":
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.id !== action.payload.id
        ),
      };

    case "REMOVE_FROM_WATCHLIST_ADDED_TO_WATCHED":
      return {
        ...state,
        watchList: state.watchList.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watched: [...state.watched, action.payload],
      };

    case "REMOVE_FROM_WATCHED":
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
      };

    case "REMOVE_FROM_WATCHED_ADDED_TO_WATCHLIST":
      return {
        ...state,
        watched: state.watched.filter(
          (movie) => movie.id !== action.payload.id
        ),
        watchList: [...state.watchList, action.payload],
      };

    case "ADD_TO_WATCHED":
      return {
        ...state,
        watched: [...state.watched, action.payload],
        watchList: state.watchList.filter(
          (movie) => movie.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
