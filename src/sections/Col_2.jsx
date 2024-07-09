import { completedTodo, pendingTodo } from "../data/data";
import ShowTodo from "../components/ShowTodo";

export default function Col_2() {
  return (
    <section className="col-2 bg-base-200 grid md:grid-cols-1 grid-cols-2 py-10 px-4">
      <ShowTodo title="Pending Todo" data={pendingTodo} status="pending"/>
      <ShowTodo title="Completed Todo" data={completedTodo} status="completed" />
     
    </section>
  );
}
