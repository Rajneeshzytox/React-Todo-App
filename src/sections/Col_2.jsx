
import ShowTodo from "../components/ShowTodo";



export default function Col_2({showTodoFunc, datas}) {
  

  return (
    <section className="col-2 bg-base-200 grid grid-cols-1 py-10 px-4 md:grid-cols-1 gap-8 sm:grid-cols-2">
      <ShowTodo title="Pending Todo" data={datas.pendingTododata} status="pending" show={showTodoFunc}/>
      <ShowTodo title="Completed Todo" data={datas.completeTododata} status="completed" />
     
    </section>
  );
}
