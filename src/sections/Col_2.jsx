
import ShowTodo from "../components/ShowTodo";



export default function Col_2({showTodoFunc, datas, deleteFunction, restoreFunction}) {
  

  return (
    <section className="col-2 bg-base-200 grid grid-cols-1 py-10 px-4 md:grid-cols-1 gap-8 sm:grid-cols-2">

      {/* PENDING TODO */}
      {
        (datas.pendingTododata[0])?(
          
          <ShowTodo title="Pending Todo" data={datas.pendingTododata} status="pending" show={showTodoFunc}/>
        ):(
          <div htmlFor="addTodo" className="text-center text-lg font-bold my-6">Add New Todo</div>
        )
      }
      {/* Completed TODO */}
      {
        (datas.completeTododata[0])?(
          <ShowTodo
          title="Completed Todo"
          data={datas.completeTododata}
          status="completed"
          onDelete={deleteFunction}
          onRestore={restoreFunction}
           />
        ):(
          <div className="text-center text-lg font-bold my-6">No Completed Todo</div>
        )
      }
     
    </section>
  );
}
