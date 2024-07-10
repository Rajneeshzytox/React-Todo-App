export default function Col_3({ todoIndexValue, datas }) {
  return (
    <section className="col-3 relative flex flex-col gap-4 items-start justify-center py-8 px-10">
      <h2 className="text-3xl font-semibold">
        {datas[todoIndexValue].title}
      </h2>
      <p>{datas[todoIndexValue].disc}</p>
      <button
        className="btn btn-circle btn-outline btn-success btn-sm tooltip tooltip-success tooltip-right"
        data-tip="completed"
       
      >
        <i className="fa-solid fa-check"></i>
      </button>
    </section>
  );
}
