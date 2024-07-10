import Logo from "../components/Logo";

export default function Navbar() {
  // const [themeValue, setThemeValue] = useState('light')
  // function theme(value){
  //     setThemeValue(value)
  //     document.querySelector('html').dataTheme = themeValue

  // }

  return (
    <section className="drawer z-50">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col ">
        {/* Navbar */}
        <div className="navbar bg-base-300 w-full z-auto rounded-full bg-transparent">
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

          {/* nav desktop nav items */}
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#create-todo">Add a todo</a>
              </li>
              <li className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className=" font-semibold btn btn-sm btn-ghost"
                >
                  Theme
                </div>
                <div tabIndex={0} className="dropdown-content menu menu-sm">
                  <div className="theme-controller theme-light hover:bg-base-100 p-2 rounded-md flex items-center">
                    <span className="aspect-square size-5 bg-primary inline-block rounded-full mr-4"></span>
                    Rajneesh
                  </div>
                  <div className="theme-light hover:bg-base-100 p-2 rounded-md flex items-center">
                    <span className="aspect-square size-5 bg-slate-100 inline-block rounded-full mr-4"></span>
                    Light
                  </div>
                  <div className="theme-light hover:bg-base-100 p-2 rounded-md flex items-center">
                    <span className="aspect-square size-5 bg-slate-900 inline-block rounded-full mr-4"></span>
                    Dark
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* SIDEBAR */}
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <ul className="menu bg-base-200 min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            {/* logo on sidebar */}
            {/* logo */}
            <div className="svg-cont w-20 h-20 aspect-square hover:bg-transparent">
              <Logo/>
            </div>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#create-todo">Add a todo</a>
          </li>

          {/* todo theme */}
          <div className="divider"></div>
          <li className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className=" font-semibold btn btn-ghost"
            >
              theme
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content hover:bg-base-300 flex  flex-col items-start"
            >
              <li
                value="light"
                className=" theme-light hover:bg-base-100 p-2 rounded-md flex items-center"
              >
                <input
                  type="radio"
                  name="theme"
                  className="theme-controller"
                  value="light"
                />
                <span className="aspect-square size-5 bg-primary inline-block rounded-full mr-4"></span>
                Rajneesh
              </li>
              <li className="theme-light hover:bg-base-100 p-2 rounded-md flex items-center">
                <span className="aspect-square size-5 bg-slate-100 inline-block rounded-full mr-4"></span>
                Light
              </li>
              <li className="theme-dark hover:bg-base-100 p-2 rounded-md flex items-center">
                <span className="aspect-square size-5 bg-slate-900 inline-block rounded-full mr-4"></span>
                Dark
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  );
}
