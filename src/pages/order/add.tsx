import {
  useRemeshDomain,
  useRemeshEvent,
  useRemeshQuery,
  useRemeshSend
} from "remesh-react";
import { OrderDomain } from "../../domains/order";
import { TodoDomain } from "../../domains/todo";

export const AddOrder = () => {
  const send = useRemeshSend();

  const domain = useRemeshDomain(OrderDomain());

  const buyer = useRemeshQuery(domain.query.getBuyer());

  // const todoDomain = useRemeshDomain(TodoDomain());
  // const list = useRemeshQuery(todoDomain.query.TodoListQuery());

  return (
    <div className="todoapp">
      <div>买方: {buyer?.name}</div>

      {/* <div>{JSON.stringify(list)};</div> */}
    </div>
  );
};
