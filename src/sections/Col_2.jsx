// data to send in col 2, col 3
import { completedTodo, pendingTodo } from "../data/data";

import ShowTodo from "../components/ShowTodo";



export default function Col_2({showTodoFunc}) {
  

  return (
    <section className="col-2 bg-base-200 grid md:grid-cols-1 grid-cols-2 py-10 px-4">
      <ShowTodo title="Pending Todo" data={pendingTodo} status="pending" show={showTodoFunc}/>
      <ShowTodo title="Completed Todo" data={completedTodo} status="completed" />
     
    </section>
  );
}
