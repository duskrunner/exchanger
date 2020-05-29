export default function createReducer(actionType, initState) {
  return (state = initState, action) => {
    if (action.type === actionType) {
      return action.payload;
    } else {
      return state;
    }
  };
}
