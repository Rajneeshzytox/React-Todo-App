import { useState, useEffect } from "react";

// components
import Sidebar from "./sections/Sidebar";
import Navbar from "./sections/Navbar";
import Col_1 from "./sections/Col_1";
import Col_2 from "./sections/Col_2";
import Col_3 from "./sections/Col_3";
import Footer from "./sections/Footer";
import UserWelcome from "./components/UserWelcome";

function App() {
  // all local stg var these are the variables with id,
  const localPending = "localPending";
  const localCompleted = "localCompleted";
  // initail Data, if local data is there than, it will set to local data, it is null than default will set, we can use ?? or ||
  const initialPendingTodo = JSON.parse(localStorage.getItem(localPending)) ?? [
    {
      title: "Welcome to creative todo react app",
      disc: `Click on the button below to mark as completed`,
    },
  ];
  const initialComppletedTodo = JSON.parse(
    localStorage.getItem(localCompleted)
  ) ?? [{ title: "Completed", disc: "disc" }];

  // ############ => pending todo data
  const [pendingTododata, setpendingTododata] = useState(initialPendingTodo);
  // ########### => completed todo data
  const [completeTododata, setcompleteTododata] = useState(
    initialComppletedTodo
  );

  // ########## => SET LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem(localPending, JSON.stringify(pendingTododata));
    localStorage.setItem(localCompleted, JSON.stringify(completeTododata));
  }, [pendingTododata, completeTododata]);

  // current todo array index index (to display todo in col 3)
  const [todoIndex, setTodoIndex] = useState(0);

  // function to display todo details in col 3
  function showTodoDetail(key) {
    setTodoIndex(() => key);
  }

  // function to add todo data in pending
  function todoAdd(value) {
    setpendingTododata((p) => [...p, { title: value.title, disc: value.disc }]);
  }

  // function for col 3 to add data in completed section, and remove from pending in short, mark as completed
  // value = { title: "soe", disc: "some"}
  // function also delete the value from the pending
  function addCompleted(value) {
    setcompleteTododata((c) => [
      ...c,
      { title: value.title, disc: value.disc },
    ]);
    // it will remove the todo with index
    setpendingTododata((p) => p.filter((_, i) => i !== todoIndex));
    // decrement index by 1
    setTodoIndex((i) => (i === 0 ? 0 : i - 1));
  }
  // function to delete permanent
  function deletePermanent(indexOfCompleted) {
    setcompleteTododata((old) => old.filter((_, i) => i !== indexOfCompleted));
  }

  // function to restore data,
  // indexOfTodoToRestore: when a user click on a todo, its index store in it
  function restoreTodo(value) {
    setpendingTododata((old) => [...old, value]);
    // we dont have to write delete code from completed section as, already deletePermant exist.. we will call it again...
  }

  return (
    <>
      {/* ### ALERT ###
    <div id="top-alert" className="warning text-white ring-warning px-6 flex justify-between items-center cursor-pointer select-none"
      onClick={ () => document.getElementById('top-alert').style.display ="none"}
    >
      <span>This project is in construction</span>
      <span className="text-lg px-2 rotate-45">+</span>
    </div> */}

      {/* user welcome screen */}
      <UserWelcome />
      <div className="todo-layout">
        <Sidebar />
        <Navbar />

        {/* stats of all todo */}
        <Col_1
          addTodoFunction={todoAdd}
          pendingCount={pendingTododata.length}
          completedCount={completeTododata.length}
        />

        {/* todo pending, completed list section */}
        <Col_2
          showTodoFunc={showTodoDetail}
          datas={{ pendingTododata, completeTododata }}
          deleteFunction={deletePermanent}
          restoreFunction={restoreTodo}
        />

        {/* todo details section */}
        <Col_3
          todoIndexValue={todoIndex}
          datas={pendingTododata}
          addCompletedFunction={addCompleted}
        />

        {/* footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
