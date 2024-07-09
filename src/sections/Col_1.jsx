import CardStats from "../components/CardStats";
import CircleStats from "../components/CircleStats";

export default function Col_1() {
  return (
    <section className="min-h-screen  col-1 grid grid-cols-2 p-4 md:grid-cols-4 lg:grid-cols-2 gap-4 relative overflow-clip bg-base-300 z-0">
      <div className="col-span-2 flex justify-around items-center">
        <CircleStats />
        <CircleStats />
      </div>
      <CardStats />
      <CardStats />
      <div className="col-span-full bg-base-300 min-h-52 rounded-2xl relative overflow-clip shadow bg-opacity-50 shadow-primary flex items-start justify-center gap-4 flex-col pl-12 ">
        <div className="text-xl font-semibold uppercase">Add Todo list</div>
        <div className="sm:w-1/2 lg:w-[80%] w-[80%] px-0 lg:px-0 sm:px-4">
          <input
            type="text"
            className="input input-sm max-w-xs input-bordered bg-base-300 bg-opacity-50 w-full input-lg mb-4"
            placeholder="Start this beautiful repo"
          />
          <br />
          <textarea
            type="text"
            className="textarea bg-base-300 bg-opacity-50 textarea-bordered z-10 w-full mb-2 "
            placeholder="My first task is to star this beautiful repo"
          />
          <button className="btn hover:bg-base-300 bg-primary btn-sm uppercase 
          ">
            + Add
          </button>
          <img className="mix-blend-screen absolute sm:bottom-0 sm:right-0 lg:w-full sm:w-1/2 sm:-translate-y-0 -translate-y-60 lg:-translate-y-10 -z-10 sm:z-0 lg:-z-10" src="./svg-first.png" />
        </div>
      </div>
      <span
        className="absolute inline-block size-28 rounded-full bg-gradient-to-r from-blue-400 pointer-events-none select-none to-primary -bottom-4 blur-2xl -right-4 -z-10"
        aria-hidden="true"
      ></span>
    </section>
  );
}
