const themes = [
  "light",
  "dark",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "synthwave",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
  "dracula",
  "cmyk",
  "autumn",
  "business",
  "acid",
  "lemonade",
  "night",
  "coffee",
  "winter",
  "dim",
  "nord",
  "sunset",
  ]


export default function Themes(){
    return(

        <div className="dropdown dropdown-bottom hover:bg-base bg-opacity-1">
        {/* THEMES dropdown title */}
        <div
          tabIndex={0}
          role="button"
          className=" font-semibold"
        >
          Themes
        </div>
        {/* THEMES dropdown content */}
        <div className="dropdown-content bg-base-100 flex flex-col gap-2 overflow-y-scroll h-40 px-8 py-4">

          <label htmlFor="rajneesh" className="flex justify-between items-center gap-4">
            <span >Rajneesh</span>
            <input 
              type="radio"
              name="theme-radio"
              id="rajneesh"
              value="rajneesh"
              className="theme-controller radio radio-primary"
              aria-label="rajneesh Theme"
              defaultChecked
            />
          </label>
          {
            themes.map((theme, index) => (

          <label htmlFor={theme} key={index} className="flex justify-between items-center gap-4">
            <span >{theme}</span>
            <input 
              type="radio"
              name="theme-radio"
              id={theme}
              value={theme}
              className="theme-controller radio radio-primary"
              aria-label={`${theme} theme`}
            />
          </label>
            ))
          }
          
        </div>
        
      </div>
    )

}