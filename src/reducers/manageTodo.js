export default function manageTodo(state = {
  todos: [],
}, action) {

  console.log("reducer received this action:", action);

  switch(action.type){
    case "enculado":
      return {
        todos: [...state.todos, action.payload]
      }
      default:
        return state
  }
  return state;
}
