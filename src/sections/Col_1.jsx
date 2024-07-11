import CardStats from "../components/CardStats";
import CircleStats from "../components/CircleStats";
import ComputerSvg from '/svg-first.svg'
import { useState } from "react";

export default function Col_1({ addTodoFunction, pendingCount, completedCount }) {
  const [todoInput, setIodoInput] = useState({ title: "", disc: "" });

  // this function change the todo inputs useState value
  function changeTodoInput(e) {
    setIodoInput((t) => ({ ...t, [e.target.name]: e.target.value }));
  }

  // this fun run when add button clicked
  function onClickBtn() {
      addTodoFunction(todoInput)
      setIodoInput((t) => ({ title: '', disc: '' }))
      
  }

  return (
    <section className="min-h-screen  col-1 grid grid-cols-2 p-4 md:grid-cols-4 lg:grid-cols-2 gap-4 relative overflow-clip bg-base-300 z-0 *:z-0">
      {/* todo progress stats */}
      <div className="col-span-2 flex justify-around items-center">
        <CircleStats 
          title="Pending Todos" 
          data={{  
                  total: pendingCount + completedCount,
                  count: pendingCount,
                }}
        />
        <CircleStats 
          title="Completed Todos" 
          data={{  
                  total:( pendingCount + completedCount),
                  count: completedCount,
                }}
        />
       
      </div>

      {/* todo stats */}
      <CardStats 
          title="Total Todos" 
          data={ pendingCount + completedCount}
          />
      <CardStats  
          title="Pending Todos" 
          data={ pendingCount }
          />
      
      {/* Add todo section */}
      <div id="addTodoSection" className="col-span-full bg-primary min-h-52 rounded-2xl relative overflow-clip shadow-xl bg-opacity-50 shadow-base flex items-start justify-center gap-4 flex-col pl-12 ">
        {/* add todo form title */}
        <div className="text-xl font-semibold uppercase">Add Todo list</div>
        {/* add todo form Inputs Container */}
        <div className="sm:w-1/2 lg:w-[80%] w-[80%] px-0 lg:px-0 sm:px-4">
          {/* add todo title Input */}
          <input
            type="text"
            className="input input-sm max-w-xs input-bordered bg-base-300 bg-opacity-90 w-full input-lg mb-4"
            name="title"
            value={todoInput.title}
            placeholder="Start this beautiful repo"
            onChange={(e) => changeTodoInput(e)}
            required
          />
          <br />
          {/* add todo disc Input */}
          <textarea
            type="text"
            className="textarea bg-base-300 bg-opacity-80 textarea-bordered w-full mb-2 "
            placeholder="My first task is to star this beautiful repo"
            name="disc"
            value={todoInput.disc}
            onChange={(e) => changeTodoInput(e)}
            required
          />

          {/* add todo function button */}
          {/* when user click this btn, onclickBtn fun runs, in which we pass the value of the todoInput useState value to addTodo function in app.jsx */}
          <button
            className="btn bg-base-300 hover:bg-primary btn-sm uppercase hover:text-primary-content border-none  hover"
            onClick={onClickBtn}
            
          >
            + Add
          </button>
          <img
            className="absolute w-64 z-[-1] top-0 right-0"
            src={ComputerSvg}
          />
        </div>
      </div>
      <span
        className="absolute inline-block size-28 rounded-full bg-gradient-to-r from-blue-500 pointer-events-none select-none to-primary -bottom-4 opacity-55 blur-2xl -right-4 -z-[2]"
        aria-hidden="true"
      ></span>
    </section>
  );
}
