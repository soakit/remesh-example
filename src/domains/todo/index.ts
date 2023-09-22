import { Remesh } from "remesh";
import { interval, map, take, tap } from "rxjs";

export type Todo = {
  id: string;
  name: string;
  completed: boolean;
};

export const TodoDomain = Remesh.domain({
  name: "TodoDomain",
  impl: (domain) => {
    const TodoListState = domain.state<Todo[]>({
      name: "TodoListState",
      default: []
    });

    const TodoListQuery = domain.query({
      name: "TodoListQuery",
      impl({ get }, status?: "completed" | "active") {
        const todoList = get(TodoListState());
        if (status === "active") {
          return todoList.filter((todo) => !todo.completed);
        } else if (status === "completed") {
          return todoList.filter((todo) => todo.completed);
        } else {
          return todoList;
        }
      }
    });

    const HasCompletedQuery = domain.query({
      name: "HasCompletedQuery",
      impl({ get }) {
        return get(TodoListQuery("completed")).length > 0;
      }
    });

    const ActiveTodoCountQuery = domain.query({
      name: "ActiveTodoCountQuery",
      impl({ get }) {
        return get(TodoListQuery("active")).length;
      }
    });

    const AllCompletedQuery = domain.query({
      name: "AllCompletedQuery",
      impl({ get }) {
        return (
          get(ActiveTodoCountQuery()) === 0 && get(TodoListQuery()).length > 0
        );
      }
    });

    const TodoAddedEvent = domain.event<Todo>({
      name: "TodoAddedEvent"
    });

    const SetTodoListCommand = domain.command({
      name: "SetTodoListCommand",
      impl(_, todoList: Todo[]) {
        console.log("SetTodoListCommand");
        return TodoListState().new(todoList);
      }
    });

    domain.effect({
      name: "FakeEffect",
      impl() {
        return interval(1000).pipe(
          take(1),
          map(() => {
            return [
              SetTodoListCommand([
                {
                  id: "1",
                  name: "zs",
                  completed: false
                }
              ])
            ];
          })
        );
      }
    });

    return {
      query: {
        TodoListQuery,
        ActiveTodoCountQuery,
        HasCompletedQuery,
        AllCompletedQuery
      },
      command: {}
    };
  }
});
