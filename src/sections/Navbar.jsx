import Logo from "../components/Logo";
import Themes from "../components/Themes";

export default function Navbar() {
  return (
    <section className="drawer z-20 *:z-auto">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* ### NAV BAR   */}
        <div className="navbar  z-auto bg-base-300 w-full ">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>

          {/* logo */}
          <div className="svg-cont w-10 h-10 aspect-square">
            <Logo />
          </div>

          {/* nav title */}
          <div className="mx-2 flex-1 px-2 font-semibold">
            Creative Todo App
          </div>
          {/* ------------------------ Desktop  ------------------  */}
          {/* nav desktop nav items */}
          <div className="hidden flex-none  lg:block">
            <ul className="menu menu-horizontal flex items-center">
              {/* Navbar menu content here */}
              <li>
                <Themes />
              </li>
              <li>
                <a href="https://github.com/Rajneeshzytox/React-Todo-App">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a href="#addTodoSection">Add a todo</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ### SIDEBAR ### */}
      <div className="drawer-side ">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        {/* Sidebar content here */}
        <ul className="menu bg-base-200 h-full w-80 min-w-[140px] max-w-[50vw] min-h-screen p-4">
          <li>
            {/* logo on sidebar */}
            {/* logo */}
            <div className="svg-cont w-20 h-20 aspect-square hover:bg-transparent">
              <Logo />
            </div>
          </li>
          <li>
            <a href="https://github.com/Rajneeshzytox/React-Todo-App">
              <i className="fa-brands fa-github"></i>
              <p>About</p>
            </a>
          </li>
          <li>
            <a href="#addTodoSection">Add a todo</a>
          </li>

          {/* todo theme on sidebar */}
          <div className="divider"></div>
          <li>
            <Themes />
          </li>
        </ul>
      </div>
    </section>
  );
}
