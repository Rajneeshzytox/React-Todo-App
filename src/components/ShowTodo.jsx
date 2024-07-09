export default function ShowTodo({ title, data, status, show }) {
  return (
    <div className="px-2">
      {/* title */}
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>

      {/* todo lists box */}
      <ul className="bg-base-300  max-h-[50vh] overflow-y-scroll *:mb-6 ">
        {/* todo li list*/}
        {
            data.map((todo, keys) => (

                <li key={keys} className="m-2 hover:bg-base-100 truncate rounded-md px-4 py-2 ">

                <div className={`badge badge-outline mb-3
                    ${(status === 'pending'? 'badge-warning': (status === `completed`)? 'badge-success': 'badge-base-100' )}`}>
                    {status}
                </div>

                <h3 className={`truncate font-semibold 
                  ${(status === 'completed'? 'line line-through text-success': '' )}
                  `}>
                    {todo.title}
                </h3>
                <p className={`truncate text-xs 
                  ${(status === 'completed'? 'line line-through': '' )}
                  `}>
                    {todo.disc}
                </p>

                {/* btn to send key in other functiom ex: a[1] */}
                {
                  (status === 'pending'? 
                  <button 
                   className="tooltip tooltip-right tooltip-success my-2 btn btn-circle btn-outline btn-success btn-xs"
                    data-tip="show todo"
                    onClick={() => show(keys)}
                   >
                      +
                  </button>: 
                  (status === `completed`)? 
                  <button  className="tooltip tooltip-right tooltip-error my-2 btn btn-circle btn-outline btn-error btn-xs"
                  data-tip="delete todo"
                  
                  >-</button> :
                   null )
                }
                </li>
            ))
        }
      </ul>
    </div>
  );
}
