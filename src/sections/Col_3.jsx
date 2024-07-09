// data to send in col 2, col 3
import { pendingTodo } from "../data/data";


export default function Col_3({todoIndexValue}) {

    return(
        <section className="col-3 relative ">
        <h2>{pendingTodo[todoIndexValue].title}</h2>
        <p>{pendingTodo[todoIndexValue].disc}</p>
        </section>
    )
}