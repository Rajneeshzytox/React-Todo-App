import Sidebar from "./sections/Sidebar"
import Navbar from "./sections/Navbar"
import Col_1 from "./sections/Col_1"
import Col_2 from "./sections/Col_2"
import Col_3 from "./sections/Col_3"
import Footer from "./sections/Footer"

function App() {
  return (
    <>
    <div className="todo-layout">
      <Sidebar />
      <Navbar />
      <Col_1 />
      <Col_2 />
      <Col_3 />
      <Footer />
    </div>
    </>
  )
}

export default App
