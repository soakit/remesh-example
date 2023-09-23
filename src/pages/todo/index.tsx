import { useRemeshDomain, useRemeshQuery } from "remesh-react";
import { TodoDomain } from "../../domains/todo";

export const AddOrder = () => {
  const todoDomain = useRemeshDomain(TodoDomain());
  const list = useRemeshQuery(todoDomain.query.TodoListQuery());
  list.map((it) => it.completed);

  return (
    <div className="todoapp">
      <div>{JSON.stringify(list)};</div>
    </div>
  );
};
