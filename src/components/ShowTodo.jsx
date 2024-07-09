export default function ShowTodo({ title, data, status }) {
  return (
    <div className="px-2">
      {/* title */}
      <h2 className="mb-4 text-lg font-semibold">{title}</h2>

      {/* todo lists box */}
      <ul className="bg-base-300  max-h-[50vh] overflow-y-scroll *:mb-6 ">
        {/* todo li list*/}
        {
            data.map((todo, keys) => (

                <li key={keys} className="ring ring-base-100 truncate rounded-md px-4 py-2 ">

                <div className={`badge badge-outline mb-3
                    ${(status === 'pending'? 'badge-warning': (status === 'completed')? 'badge-success': 'badge-base-100' )}`}>
                    {status}
                </div>

                <h3 className="truncate font-semibold">
                    {todo.title}
                </h3>
                <p className="truncate text-xs">
                    {todo.disc}
                </p>
                </li>
            ))
        }
      </ul>
    </div>
  );
}
