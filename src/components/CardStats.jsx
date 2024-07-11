function CardStats(
  {
    title, // title to display
    data, // number to display
  }
){
    return(
        <div className="stats shadow mr-4">
        <div className="stat flex flex-col items-center justify-evenly *:text-center">
          <div className="stat-title  text-wrap break-words ">{title}</div>
          <div className="text-6xl font-bold to-cyan-500  from-primary bg-clip-text text-transparent bg-gradient-to-t ">{data}</div>
         
        </div>
      </div>
    )

}

export default CardStats;