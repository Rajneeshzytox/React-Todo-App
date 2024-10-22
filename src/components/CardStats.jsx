function CardStats(
  {
    title, // title to display
    data, // number to display
  }
){
    return(
        <div className="stats shadow-xl bg-base-200 shadow-base mr-4">
        <div className="stat flex flex-col items-center justify-evenly *:text-center">
          <div className="stat-title  text-wrap break-words ">{title}</div>
          <div className="text-6xl font-bold to-secondary  from-primary bg-clip-text text-transparent bg-gradient-to-t ">{data}</div>
         
        </div>
      </div>
    )

}

export default CardStats;