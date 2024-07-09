import Sidebar from "./sections/Sidebar"
import Navbar from "./sections/Navbar"
import Col_1 from "./sections/Col_1"
import Col_2 from "./sections/Col_2"
import Col_3 from "./sections/Col_3"
import Footer from "./sections/Footer"
import { useState } from "react";




function App() {
  const [todoIndex, setTodoIndex] = useState(0)
  function showTodoDetail(key){
    setTodoIndex(t => key)
    
  }
  return (
    <>
    <div className="todo-layout">
      <Sidebar />
      <Navbar />
      <Col_1 />
      <Col_2 showTodoFunc={showTodoDetail} />
      <Col_3 todoIndexValue={todoIndex}/>
      <Footer />
    </div>
    </>
  )
}

export default App
