import {
  ADD_LIKE,
  ADD_POSTS,
  DELETE_POSTS,
  EDIT_POSTS,
  GET_POSTS,
} from "../actions/post.actions";

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS:
      return action.payload;
    case ADD_POSTS:
      return [action.payload, ...state];
    case EDIT_POSTS:
      return state.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post, //on reprend tout
            content: action.payload.content, //on modifie la valeur voulue
          };
        } else return post; //sinon le store serait vide, il faut bien réecrire les autres postes
      });
    case DELETE_POSTS:
      return state.filter((post) => post.id !== action.payload.postId);
    case ADD_LIKE:
      return state.map((post) => {
        if (post.id === action.payload.id) {
          return {
            ...post,
            likes: action.payload.likes,
          };
        } else return post;
      });
    default:
      return state;
  }
}
