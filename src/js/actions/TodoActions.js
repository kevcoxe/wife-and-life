import dispatcher from "../dispatcher";

export function createTodo(text) {
  dispatcher.dispatch({
    type: "CREATE_TODO",
    text,
  });
}

export function deleteTodo(id) {
  dispatcher.dispatch({
    type: "DELETE_TODO",
    id,
  });
}

export function reloadTodos() {
  dispatcher.dispatch({type: "FETCH_TODOS"});

  setTimeout(() => {
    dispatcher.dispatch({type: "RECIEVE_TODOS", todos: [
      {
        id: 1123,
        text: "Go Shopping",
        complete: false
      },
      {
        id: 11123,
        text: "yolo",
        complete: false
      },
      {
        id: 1124,
        text: "Finish Flask",
        complete: true
      }
    ]});
  }, 1000);

}
