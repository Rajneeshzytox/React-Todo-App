export default function ShowTodo({ 
  title, 
  data, 
  status, 
  show,
  onDelete
}) {
  return (
    <div className="px-2">
      {/* title */}
      <h2 className="mb-4 text-lg font-semibold ml-2">
        {status === "pending" ? (
          <i className="fa-solid fa-hourglass-end mr-2"></i>
        ) : (
          <i className="fa-solid fa-check mr-2"></i>
        )}
        {title}
      </h2>

      {/* todo lists box */}
      <ul className="bg-base-300 rounded-xl max-h-[50vh] overflow-y-scroll px-2 *:my-4 ">
        {/* todo li list*/}
        {data.map((todo, keys) => (
          <li
            key={keys}
            className="m-2 bg-base-100 truncate rounded-md px-4 py-2 relative"
          >
          {/* li badge */}
            <div
              className={`badge badge-outline mb-3
                    ${
                      status === "pending"
                        ? "badge-warning"
                        : status === `completed`
                        ? "badge-success"
                        : "badge-base-100"
                    }`}
            >
              {status === "pending" ? (
                <i className="fa-solid fa-hourglass-end mr-2"></i>
              ) : (
                <i className="fa-solid fa-check mr-2"></i>
              )}
              {status}
            </div>
          
          {/* todo title */}
            <h3
              className={`truncate font-semibold 
                  ${
                    status === "completed"
                      ? "line line-through text-success"
                      : ""
                  }
                  `}
            >
              {todo.title}
            </h3>
          {/* todo disc small */}
            <p
              className={`truncate text-xs 
                  ${status === "completed" ? "line line-through" : ""}
                  `}
            >
              {todo.disc}
            </p>

          {/* todo button
          btn to send key in show functiom ex: a[1] */}
            {status === "pending" ? (
              <button
                className="tooltip tooltip-left tooltip-success my-2 btn btn-circle btn-outline btn-success btn-xs right-4 bottom-4 absolute"
                data-tip="show todo"
                onClick={() => show(keys)}
              >
               <i className=" fa-solid fa-up-right-and-down-left-from-center"></i>
              </button>
            ) : status === `completed` ? (
              <button
                className="tooltip tooltip-left tooltip-error my-2 btn btn-circle btn-outline btn-error btn-xs float-right absolute right-4 bottom-4"
                data-tip="delete todo"
                onClick={()=>onDelete(keys)}

              >
                <i className="fa-solid fa-trash"></i>
              </button>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
}
