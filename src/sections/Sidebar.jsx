

export default function Sidebar() {
 
    return(
      <section className="glass sidebar  relative">
 
        <div className="side-cont h-full md:h-screen flex md:flex-col items-center justify-between select-none sticky w-full mx-auto top-0 md:px-0 px-8 md:">
          <div className="w-10 aspect-square bg-slate-500 rounded-full md:my-8 overflow-clip">
            <img src="./me.jpg" alt="logo" />
          </div>

          <h2 className="uppercase sm:tracking-[10px] md:-rotate-90 font-semibold">Rajneeshzytox</h2>

          
          <label className="w-6 aspect-square bg-slate-500 rounded-full md:my-6 flex items-center justify-center font-semiold italic text-white  cursor-pointer relative" htmlFor="my_modal_7">
            <div className="animate-ping w-full h-full bg-slate-400 absolute rounded-full pointer-events-none " style={{animationDuration: "2s"}}></div>
            i
          </label>
          <input type="checkbox" id="my_modal_7" className="modal-toggle" />
          <div className="modal" role="dialog">
            <div className="modal-box">
              <h3 className="text-lg font-bold">Todo App Info</h3>
              <p className="py-4">This project is a Todo application built to learn and demonstrate the fundamentals of React.<br />The app is developed using Vite, React, TailwindCSS, and DaisyUI. It covers essential React concepts such as components, props, rendering components using the <span className="font-bold">map</span> function, and editing arrays of objects in state.</p>

            


            </div>
            <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
          </div>
        </div>
      
       
      </section>
    )
}