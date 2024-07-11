
function CircleStats({
  title, //title to show
  data, // data {total: , count: , }
}){
    const CircleStatsValue = (data.count)?(
      Math.floor((data.count/data.total)*100)):
       0;
    return(
      <div className="flex flex-col gap-2">
      
        <div
        className="radial-progress text-blue-500 shadow-lg shadow-primary -z-10 mx-auto"
        style={{ "--value":  CircleStatsValue}}
        role="progressbar"
      >
        <span className="text-base-content">{CircleStatsValue}%</span>
      </div>
      <div className="title">{title}</div>
      </div>
      
    )
}

export default CircleStats;