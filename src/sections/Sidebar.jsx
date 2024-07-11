export default function Sidebar() {
  return (
    <section className=" relative bg-gradient-to-r from-blue-900 to-blue-800 bg-opacity-50 sidebar z-10">
      <span className="glass pointer-events-none w-full h-full absolute"></span>
      <div className="side-cont h-full lg:h-screen flex lg:flex-col items-center justify-between select-none sticky w-full mx-auto top-0 lg:px-0 px-8 ">
        <div className="w-10 aspect-square bg-slate-500 rounded-full lg:my-8 overflow-clip">
          <img src="./me.jpg" alt="logo" />
        </div>


        {/* sidebar heading */}
        <h2 className="uppercase sm:tracking-[10px] lg:-rotate-90 font-semibold text-primary-content">
          Rajneeshzytox
        </h2>


        {/* sidebar label for info box checkbox  */}
        <label
          className="w-6 aspect-square ring rounded-full lg:my-6 flex items-center justify-center font-semiold italic text-white cursor-help relative"
          htmlFor="my_modal_7"
        >
          <div
            className="animate-ping w-full h-full bg-sky-500 absolute rounded-full pointer-events-none "
            style={{ animationDuration: "2s" }}
          ></div>
          i
        </label>
        <input type="checkbox" id="my_modal_7" className="modal-toggle " />
        <div className="modal z-30" role="dialog">
          <div className="modal-box">
            <h3 className="text-lg font-bold">Todo App Info</h3>
            <p className="py-4">
              This project is a Todo application built to learn and demonstrate
              the fundamentals of React.
              <br />
              The app is developed using Vite, React, TailwindCSS, and DaisyUI.
              It covers essential React concepts such as components, props,
              rendering components using the{" "}
              <span className="font-bold">map</span> function, and editing
              arrays of objects in state.
            </p>
          </div>
          <label className="modal-backdrop" htmlFor="my_modal_7">
            Close
          </label>
        </div>
      </div>
    </section>
  );
}
