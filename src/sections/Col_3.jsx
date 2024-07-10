export default function Col_3(
  {   todoIndexValue,
      datas,
      addCompletedFunction
    }) {
  return (
    <section className="col-3 relative flex flex-col gap-4 items-start justify-center md:justify-start py-8 px-10">
      {
        (datas[todoIndexValue])?(
          <>
          <h2 className="text-3xl font-semibold">
          {datas[todoIndexValue].title}
        </h2>
        <p>{datas[todoIndexValue].disc}</p>
  
        {/* button to mark as completede */}
        <button
          className="btn btn-circle btn-outline btn-success btn-sm tooltip tooltip-success tooltip-right"
          data-tip="completed"
          onClick={() => addCompletedFunction({
            title: datas[todoIndexValue].title, 
            disc: datas[todoIndexValue].disc
  
          })}
        >
          <i className="fa-solid fa-check"></i>
        </button>
        </>
        ): (
            <div>
              <h3 className="text-xl font-semibold text-success">Wooohhh ! </h3>
              <p>
              you have completed all your pending task !!!!
              </p>
              <a className="text-sm bg-primary px-4 py-1 my-2 rounded-btn inline-block" href="#addTodoSection">Add data to show <i className="fa-solid fa-arrow-up mx-1"></i></a>
            </div>
        )

      }
     
    </section>
  );
}
