
function CircleStats(){

    return(
      <div className="flex flex-col gap-2">
      
        <div
        className="radial-progress text-blue-700 shadow-lg shadow-primary -z-10 mx-auto"
        style={{ "--value": 70 }}
        role="progressbar"
      >
        <span className="text-base-content">70%</span>
      </div>
      <div className="title">Todo Complete</div>
      </div>
      
    )
}

export default CircleStats;