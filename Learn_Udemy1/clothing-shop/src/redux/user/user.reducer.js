import  {UserActionType} from './user.types'
const INITIAL_STATE = {
  currentUser: null,
};
const useReducer = (state = INITIAL_STATE, action) => {
    console.log(state)

  switch (action.type) {
    case UserActionType.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};
export default useReducer;
