import Sidebar from "./sections/Sidebar";
import Navbar from "./sections/Navbar";
import Col_1 from "./sections/Col_1";
import Col_2 from "./sections/Col_2";
import Col_3 from "./sections/Col_3";
import Footer from "./sections/Footer";

import { useState } from "react";

function App() {
  // all useStates

  // pending todo data
  const [pendingTododata, setpendingTododata] = useState([
    { title: "hello", disc: "disc" },
  ]);
  // completed todo data
  const [completeTododata, setcompleteTododata] = useState([
    { title: "Completed", disc: "disc" },
  ]);

  // current todo array index index (to display todo in col 3)
  const [todoIndex, setTodoIndex] = useState(0);
  // function to display todo details in col 3
  function showTodoDetail(key) {
    setTodoIndex((t) => key);
  }

  // function to add todo data in pending
  function todoAdd(value) {
    setpendingTododata(p => [...p, {title: value.title, disc: value.disc}])
  }

  // function for col 3 to add data in completed section, and remove from pending in short, mark as completed
  // value = { title: "soe", disc: "some"}
  // function also delete the value from the pending
  function addCompleted(value){
    setcompleteTododata(c => [...c, {title: value.title, disc: value.disc}])

    setpendingTododata(p => p.filter((_,i) => i!== todoIndex))

    setTodoIndex(i => (i===0)? 0: i-1)
  }

  function deletePermanent(indexOfCompleted){
      setcompleteTododata(old => old.filter((_, i) => i!==indexOfCompleted))
  }

  return (
    <>
      <div className="todo-layout">
        <Sidebar />
        <Navbar />

        {/* stats of all todo */}
        <Col_1 addTodoFunction={todoAdd} todoIndexValue={todoIndex} />

        {/* todo pending, completed list section */}
        <Col_2
          showTodoFunc={showTodoDetail}
          datas={{ pendingTododata, completeTododata}}
          deleteFunction={deletePermanent}
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
