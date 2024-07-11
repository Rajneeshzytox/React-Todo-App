export default function Col_3(
  {   todoIndexValue,
      datas,
      addCompletedFunction
    }) {
  return (
    <section className="col-3 relative flex flex-col gap-4 items-start  justify-start py-8 px-10 overflow-y-scroll max-h-screen">
      {
        (datas[todoIndexValue])?(
          <>
          <h2 className="text-2xl text-pretty font-semibold">
          {datas[todoIndexValue].title}
        </h2>
        <div className="divider"></div>
        <p className=" text-balance">{datas[todoIndexValue].disc}</p>
  
        {/* button to mark as completede */}
        <button
          className="btn btn-circle btn-outline btn-success text-success-content btn-sm tooltip tooltip-success tooltip-right"
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
          // if there is nothing to show on col 3
            <div> 
              <h3 className="text-xl font-semibold text-success">Wooohhh ! </h3>
              <div className="divider"></div>
              
              <p >
              you have completed all your pending task !!!!
              </p>
              <a className="text-sm bg-primary text-primary-content px-4 py-1 my-2 rounded-btn inline-block" href="#addTodoSection">Add data to show <i className="fa-solid fa-arrow-up mx-1"></i></a>
            </div>
        )

      }
     
    </section>
  );
}
